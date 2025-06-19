(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.amexgbtAIChatbot = {
    attach: function (context, settings) {
      // Debug logging
      console.log("Current Full Path:", window.location.pathname);
      console.log("Full URL:", window.location.href);

      // Determine the correct API endpoint
      const apiEndpoint =
        window.location.origin +
        "/dev-portal/web" +
        "/amexgbt-ai-chatbot/conversation";

      console.log("Constructed API Endpoint:", apiEndpoint);

      // HTML-escape function (used in prettifyApiText)
      function escapeHtml(unsafe) {
        return unsafe
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }

      // Function to handle different text sections in API response
      function prettifyApiText(rawText) {
        if (!rawText || typeof rawText !== "string") return "";

        // 1. Un-escape common sequences (\n, \t, \", \/, \u0027)
        const unescaped = rawText
          .replace(/\\n/g, "\n")
          .replace(/\\t/g, "    ")
          .replace(/\\"/g, '"')
          .replace(/\\\//g, "/")
          .replace(/\\u0027/g, "'")
          .replace(/\\u0022/g, '"');

        // 2. Split into lines
        const lines = unescaped.split("\n");

        // 3. HTML-escape function
        const escape = (s) =>
          s.replace(
            /[&<>"']/g,
            (c) =>
              ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;",
              }[c])
          );

        // 4. Walk line-by-line and build structured blocks
        const out = [];
        let buffer = []; // collects sentence lines for <p>
        let inList = false; // are we inside a <ul>
        let inNumberedList = false; // are we inside a <ol>
        let inCodeBlock = false; // are we inside a <pre>
        let currentListNumber = 1; // track current list number
        let codeBlockContent = []; // collect code block content

        const flushParagraph = () => {
          if (buffer.length) {
            out.push("<p>" + escape(buffer.join(" ")) + "</p>");
            buffer = [];
          }
        };

        const closeList = () => {
          if (inList) {
            out.push("</ul>");
            inList = false;
          }
          if (inNumberedList) {
            out.push("</ol>");
            inNumberedList = false;
            currentListNumber = 1;
          }
        };

        const closeCodeBlock = () => {
          if (inCodeBlock) {
            out.push(
              '<pre class="code-block">' +
                escape(codeBlockContent.join("\n")) +
                "</pre>"
            );
            inCodeBlock = false;
            codeBlockContent = [];
          }
        };

        lines.forEach((line) => {
          // Trim the line
          const trimmedLine = line.trim();

          // Handle code blocks
          if (trimmedLine === "```") {
            if (inCodeBlock) {
              // Closing code block
              closeCodeBlock();
            } else {
              // Opening code block
              closeList();
              flushParagraph();
              inCodeBlock = true;
              codeBlockContent = [];
            }
            return;
          }

          // If in code block, collect content
          if (inCodeBlock) {
            codeBlockContent.push(line);
            return;
          }

          // Handle blank lines
          if (!trimmedLine) {
            flushParagraph();
            closeList();
            return;
          }

          // Handle numbered list items
          const numberedListMatch = trimmedLine.match(/^(\d+)\.\s*(.+)/);
          if (numberedListMatch) {
            if (!inNumberedList) {
              flushParagraph();
              closeList();
              out.push("<ol>");
              inNumberedList = true;
              currentListNumber = 1;
            }

            // Ensure the list item matches the current number
            if (parseInt(numberedListMatch[1]) === currentListNumber) {
              out.push(`<li>${escape(numberedListMatch[2])}</li>`);
              currentListNumber++;
            }
            return;
          }

          // Handle bullet list items
          const bulletMatch = trimmedLine.match(/^(?:[-*•]|->)\s+(.+)/);
          if (bulletMatch) {
            if (!inList) {
              flushParagraph();
              closeList();
              out.push("<ul>");
              inList = true;
            }
            out.push("<li>" + escape(bulletMatch[1]) + "</li>");
            return;
          }

          // Normal text handling
          if (inList || inNumberedList) {
            closeList();
          }
          buffer.push(trimmedLine);
        });

        // Close any remaining open blocks
        flushParagraph();
        closeList();
        closeCodeBlock();

        return out.join("\n");
      }

      // More flexible path and container checking
      const $chatbotContainer = $(context).find(
        ".amexgbt-ai-chatbot-container"
      );
      console.log("Chatbot Container Found:", $chatbotContainer.length);

      // Ensure we're on the right page and the container exists
      if ($chatbotContainer.length === 0) {
        console.log("Chatbot container not found in this context");
        return;
      }

      // Ensure the behavior runs only once
      $chatbotContainer.once("amexgbtAIChatbot").each(function () {
        // Select all necessary elements
        const $chatbot = $(this);
        const $minimizedChatbot = $("#chatbot-minimized");
        const $inputField = $(".chatbot-input-field", $chatbot);
        const $sendBtn = $(".chatbot-send-btn", $chatbot);

        // Get access token from drupalSettings
        const accessToken = drupalSettings.amexgbtAIChatbot?.accessToken || "";

        // Function to adjust chatbot height
        function adjustChatbotHeight(expand = false) {
          if (expand) {
            $chatbot.css("height", "450px");
          } else {
            $chatbot.css("height", "250px");
          }
        }

        // Initial setup with reduced height
        adjustChatbotHeight(false);

        // Send Message function
        function sendMessage() {
          const message = $inputField.val().trim();

          // Validate message
          if (!message) return;

          // Expand chatbot height when conversation starts
          adjustChatbotHeight(true);

          // Disable input during processing
          $inputField.prop("disabled", true);
          $sendBtn.prop("disabled", true).addClass("disabled");

          // Add user message
          addMessage("user", message);

          // Show loading indicator
          showLoading();

          // Send message to backend
          $.ajax({
            url: apiEndpoint,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
              question: message,
            }),
            success: function (response) {
              console.log("Full Success Response:", response);
              hideLoading();

              // Add bot response
              if (response.status === "success") {
                addMessage("bot", response.message);
              } else {
                addMessage(
                  "bot",
                  response.message || "Sorry, I couldn't process your request."
                );
              }
            },
            error: function (xhr, status, error) {
              console.error("Full Error Response:", {
                status: xhr.status,
                statusText: xhr.statusText,
                responseText: xhr.responseText,
                error: error,
              });

              hideLoading();

              // Add error message
              addMessage(
                "bot",
                `An error occurred: ${xhr.status} ${xhr.statusText}`
              );
            },
            complete: function () {
              // Reset input
              $inputField.val("").prop("disabled", false);
              $sendBtn.prop("disabled", false).removeClass("disabled");

              // Scroll to bottom
              scrollToBottom();
            },
          });
        }

        // Add message to chat
        function addMessage(role, content) {
          const $messagesContainer = $(".chatbot-messages", $chatbot);

          // Apply prettifyApiText only for bot messages
          const formattedContent =
            role === "bot" ? prettifyApiText(content) : escapeHtml(content);

          const messageHtml = `
              <div class="chatbot-message ${role}">
                ${formattedContent}
                ${
                  role === "bot"
                    ? `
                  <div class="message-actions-bottom">
                    <button class="copy-message-btn-bottom">
                      <span class="copy-icon"><i class="fas fa-copy"></i></span>
                      <span class="copy-text">Copy</span>
                    </button>
                  </div>
                `
                    : ""
                }
              </div>
            `;

          $messagesContainer.append(messageHtml);

          // Add copy functionality for bot messages
          if (role === "bot") {
            const $lastMessage = $messagesContainer
              .find(".chatbot-message.bot")
              .last();
            const $copyBtn = $lastMessage.find(".copy-message-btn-bottom");
            const $copyIcon = $copyBtn.find(".copy-icon");
            const $copyText = $copyBtn.find(".copy-text");

            $copyBtn.on("click", function () {
              // Create a temporary textarea to copy text
              const $temp = $("<textarea>");
              $("body").append($temp);

              // Extract text content with proper formatting
              const $messageContent = $lastMessage.clone();

              // Remove action buttons
              $messageContent.find(".message-actions-bottom").remove();

              // Get the formatted text
              const textToCopy = htmlToPlainText($messageContent);

              $temp.val(textToCopy).select();
              document.execCommand("copy");
              $temp.remove();

              // Visual feedback
              $copyIcon.html(
                '<i class="fas fa-check" style="color: green;"></i>'
              );
              $copyText.text("Copied").css("color", "green");

              // Reset after 2 seconds
              setTimeout(() => {
                $copyIcon.html('<i class="fas fa-copy"></i>');
                $copyText.text("Copy").css("color", "");
              }, 2000);
            });
          }

          scrollToBottom();
        }

        // Show loading dots
        function showLoading() {
          $(".chatbot-messages", $chatbot).append(`
            <div class="loading-dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          `);
          scrollToBottom();
        }

        // Hide loading dots
        function hideLoading() {
          $(".loading-dots", $chatbot).remove();
        }

        // Scroll to bottom of messages
        function scrollToBottom() {
          const $messagesContainer = $(".chatbot-messages", $chatbot);
          $messagesContainer.scrollTop($messagesContainer[0].scrollHeight);
        }

        // Event Listeners
        $sendBtn.on("click", sendMessage);
        $inputField.on("keypress", function (e) {
          if (e.which === 13) sendMessage();
        });

        // Initial setup
        $inputField.on("input", function () {
          const message = $(this).val().trim();
          $sendBtn
            .prop("disabled", message.length === 0)
            .toggleClass("disabled", message.length === 0);
        });

        // Minimize and restore functionality
        $(".chatbot-minimize-btn", $chatbot).on("click", function () {
          $chatbot.hide();
          $minimizedChatbot.show();
        });

        $minimizedChatbot.on("click", function () {
          $chatbot.show();
          $minimizedChatbot.hide();
        });

        // Debugging: Log when initialization is complete
        console.log("Chatbot initialized");
        console.log("Initializing chatbot on node/66");
      });
    },
  };
})(jQuery, Drupal, drupalSettings);
