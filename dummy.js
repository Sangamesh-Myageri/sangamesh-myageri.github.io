HTML:

```
<div class="amexgbt-ai-chatbot-container" id="amexgbt-ai-chatbot">
  <div class="chatbot-header">
    <span>Developer Portal AI Assistant</span>
    <div class="chatbot-header-actions">
      <button class="chatbot-minimize-btn">
        <i class="fas fa-window-minimize"></i>
      </button>
    </div>
  </div>
  
  <div class="chatbot-body">
    <div class="chatbot-messages">
      <div class="chatbot-message bot initial-message">
        How can I help you today?
      </div>
    </div>
  </div>
  
  <div class="chatbot-input">
    <input type="text" placeholder="Ask a question..." class="chatbot-input-field">
    <button class="chatbot-send-btn">Send</button>
  </div>
</div>

<div class="chatbot-minimized-container" id="chatbot-minimized" style="display: none;">
  <div class="chatbot-minimized">
    <i class="fas fa-robot"></i>
    <span>Developer Portal AI Assistant</span>
  </div>
</div>
```
CSS:

```.amexgbt-ai-chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 250px;
  background-color: #e8f0f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}

.chatbot-header {
  background-color: #006fcf;
  color: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-header-actions {
  display: flex;
  gap: 10px;
}

.chatbot-header-actions button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.chatbot-body {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.chatbot-messages {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #006fcf #e8f0f9;
}

.chatbot-input {
  padding: 10px;
  background-color: #f0f0f0;
  border-top: 1px solid #ddd;
  display: flex;
  gap: 10px;
}

.chatbot-input input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.chatbot-input button {
  padding: 8px 15px;
  background-color: #006fcf;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.chatbot-input button:disabled {
  background-color: #a0c4e4;
  cursor: not-allowed;
}

.chatbot-message {
  max-width: 85%;
  margin: 5px 0;
  padding: 8px;
  border-radius: 12px;
  word-wrap: break-word;
  position: relative;
}

.chatbot-message.user {
  background-color: #00175a;
  color: white;
  align-self: flex-end;
  margin-left: auto;
  text-align: right;
}

.chatbot-message.bot {
  background-color: #f0f0f0;
  color: #00175a;
  align-self: flex-start;
}

.message-actions {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
}
.message-copy-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.copy-message-btn {
  background: none;
  border: none;
  color: #006fcf;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
}

.copy-message-btn:hover {
  color: #00175a;
}

.copy-message-btn.copied {
  color: green;
}

/* Loading Dots Animation */
.loading-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.loading-dots .dot {
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background-color: #006fcf;
  border-radius: 50%;
  animation: bounce 0.5s ease-in-out infinite alternate;
}

.loading-dots .dot:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-dots .dot:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

/* Minimized State */
.chatbot-minimized-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
}

.chatbot-minimized {
  background-color: #006fcf;
  color: white;
  padding: 10px 15px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chatbot-minimized i {
  font-size: 20px;
}

.chatbot-input button.disabled {
  background-color: #a0c4e4;
  cursor: not-allowed;
  opacity: 0.7;
}

.message-actions-bottom {
  text-align: right;
  margin-top: 10px;
}

.copy-message-btn-bottom {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.copy-message-btn-bottom .copy-icon {
  display: flex;
  align-items: center;
}

.copy-message-btn-bottom:hover {
  background-color: #e0e0e0;
}

.error-notification {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4d4d;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
}

/* Webkit (Chrome, Safari, newer versions of Opera) */
.chatbot-messages::-webkit-scrollbar {
  width: 8px;
}

.chatbot-messages::-webkit-scrollbar-track {
  background: #e8f0f9;
}

.chatbot-messages::-webkit-scrollbar-thumb {
  background-color: #006fcf;
  border-radius: 4px;
}

.chatbot-messages::-webkit-scrollbar-thumb:hover {
  background-color: #00175a;
}

.chatbot-message p {
  margin: 10px 0;
}

.chatbot-message ul {
  margin: 10px 0;
  padding-left: 20px;
}

.chatbot-message li {
  margin-bottom: 5px;
}

.chatbot-message pre.code-block {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 10px 0;
  overflow-x: auto;
}

.chatbot-message ol {
  margin: 10px 0;
  padding-left: 30px;
}

.chatbot-message ol li {
  margin-bottom: 5px;
}```

/**
 * prettifyApiText(rawText)  ➜  returns HTML string
 * ---------------------------------------------------------------------------
 *  • Turns "\n" / "\t" escape-sequences into real characters
 *  • Collapses consecutive blanks
 *  • Builds <p> paragraphs and <ul><li> bullet-lists
 *  • Safe-by-default: text is HTML-escaped before output
 *
 *  Usage:
 *      const readable = prettifyApiText(apiDump);
 *      document.querySelector('#output').innerHTML = readable;
 */
function prettifyApiText(rawText) {
  if (!rawText || typeof rawText !== 'string') return '';

  // 1. Un-escape common sequences (\n, \t, \")
  const unescaped = rawText
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '    ')          // 4 spaces for \t
    .replace(/\\"/g, '"');            // optional: un-escape quotes

  // 2. Split into trimmed lines we can examine
  const lines = unescaped.split('\n').map(l => l.trim());

  // 3. Helper for HTML-escaping
  const escape = s =>
    s.replace(/[&<>"]/g, c =>
      ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));

  // 4. Walk line-by-line and build structured blocks
  const out = [];
  let buffer = [];           // collects sentence lines for <p>
  let inList = false;        // are we inside a <ul>?

  const flushParagraph = () => {
    if (buffer.length) {
      out.push('<p>' + escape(buffer.join(' ')) + '</p>');
      buffer = [];
    }
  };

  const closeList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  lines.forEach(line => {
    if (!line) {                     // blank line  → paragraph break
      flushParagraph();
      closeList();
      return;
    }

    const bulletMatch = line.match(/^(?:[-*•]|->)\s+(.*)/);
    if (bulletMatch) {               // bullet line
      if (!inList) {                 // open a new <ul> if needed
        flushParagraph();
        out.push('<ul>');
        inList = true;
      }
      out.push('<li>' + escape(bulletMatch[1]) + '</li>');
    } else {                         // normal sentence line
      closeList();
      buffer.push(line);
    }
  });

  flushParagraph();
  closeList();

  return out.join('\n');
}
<script>
  // Imagine `apiResponse` holds the raw text you pasted
  const apiResponse = `The Get Trips API is a service that\\nPurpose\\nReturns complete trip information ...`;
  const html = prettifyApiText(apiResponse);
  document.getElementById('output').innerHTML = html;   // <div id="output"></div>
</script>

<script>
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

      function htmlToPlainText($element) {
        let text = "";
        let listLevel = 0;

        function addIndent(level) {
          return " ".repeat(level * 2);
        }

        function processElement($el) {
          const nodeType = $el[0].nodeType;
          const tagName = $el[0].tagName;

          if (nodeType === Node.TEXT_NODE) {
            return $el.text().trim() + " ";
          }

          if (nodeType === Node.ELEMENT_NODE) {
            switch (tagName) {
              case "P":
                return $el.text().trim() + "\n\n";

              case "OL":
                listLevel++;
                let olText = "";
                $el.find("> li").each(function (index) {
                  olText += `${addIndent(listLevel - 1)}${index + 1}. ${$(this)
                    .text()
                    .trim()}\n`;
                });
                olText += "\n";
                listLevel--;
                return olText;

              case "UL":
                listLevel++;
                let ulText = "";
                $el.find("> li").each(function () {
                  ulText += `${addIndent(listLevel - 1)}- ${$(this)
                    .text()
                    .trim()}\n`;
                });
                ulText += "\n";
                listLevel--;
                return ulText;

              case "PRE":
                if ($el.hasClass("code-block")) {
                  const codeContent = $el.text().trim();
                  return codeContent ? "```\n" + codeContent + "\n```\n\n" : "";
                }
                return $el.text().trim() + "\n\n";
            }
          }

          return "";
        }

        // Traverse through child nodes
        $element.contents().each(function () {
          text += processElement($(this));
        });

        return text.trim();
      }

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
</script>



The Get Trips API is a service that:\n\nPurpose:\nReturns complete trip information including:\n- Traveler Data\n- Client Data\n- Agency Data\n- Fare Data\n- Itinerary Data\n- Remarks\n\nHow to Access:\n\n1. Search Options:\n- Using GTR Trip ID (UUID)\nOR\n- Using combination of GDS ID and PNR Record Locator\n\n2. API Request Format:\n```\nGET /trips/v1?tripid={TripID value}\nOR\nGET /trips/v1?source={GDS ID}&recordlocator={GDS PNR Record Locator}\n```\n\n3. Required Headers:\n- Accept: application/xml or application/json\n- APIKey: [your API key]\n\n4. Authentication:\n- APIKey or Access Token required\n\n5. Response Format:\n- Available in JSON or XML format\n- Format determined by Accept header\n\nFor additional assistance with the Get Trips API, contact DataServicesSupport@amexgbt.com.

The Get Trips API's purpose is to retrieve comprehensive trip information from American Express Global Business Travel (AmexGBT) systems.\n\nPrimary Function:\nReturns complete trip details including:\n1. Traveler Data (names, contact info)\n2. Client Data (company information)\n3. Agency Data\n4. Fare Data (pricing information)\n5. Itinerary Data (travel segments)\n6. Remarks (additional notes)\n\nHow to Access Trip Data:\n1. Using GTR Trip ID (UUID)\n   - Unique identifier for specific trip\nOR\n2. Using combination of:\n   - GDS ID (source system code like AMA, SAB)\n   - PNR Record Locator (6-character confirmation number)\n\nKey Benefits:\n- Provides real-time access to trip information\n- Supports both XML and JSON formats\n- Secure access through API key or OAuth2 authentication\n- Available in both test and production environments\n\nFor additional details about the API's purpose and functionality, contact DataServicesSupport@amexgbt.com. 

Here's a summary of the Get Trips API:\n\nPurpose:\nRetrieves complete trip details including:\n- Traveler Data\n- Client Data\n- Agency Data\n- Fare Data\n- Itinerary Data\n- Remarks\n\nTechnical Details:\n\n1. Request Format:\n```\nGET /trips/v1?tripid={TripID value}\nOR\nGET /trips/v1?source={GDS ID}&recordlocator={GDS PNR Record Locator}\n```\n\n2. Search Methods:\n- Using GTR Trip ID (UUID)\nOR\n- Combination of GDS ID and PNR Record Locator\nNote: If all parameters used, TripID takes priority\n\n3. Required Headers:\n- Accept: application/xml or application/json\n- APIKey: [your-api-key]\n\n4. Authentication:\n- Uses either APIKey or Access Token\n\n5. Response Format:\n- Available in JSON or XML\n\nFor additional assistance, contact DataServicesSupport@amexgbt.com.

The Get Trips API has two search methods:\n\n1. Using GTR Trip ID (UUID):\n```\nGET /trips/v1?tripid={TripID value}\n```\n- Uses a unique trip identifier\n- Example: tripid=01-da1925f0-c01b-11e6-8c98-a7787795551d\n\n2. Using GDS ID and Record Locator combination:\n```\nGET /trips/v1?source={GDS ID}&recordlocator={GDS PNR Record Locator}\n```\n- Source: 3-letter GDS code (e.g., AMA, SAB, APO)\n- Record Locator: 6-character alphanumeric confirmation code\n- Example: source=SAB&recordlocator=WRSBHZ\n\nImportant Notes:\n- Must use either tripid OR source + recordlocator combination\n- If all parameters are provided, search defaults to TripID\n- Cannot use source or recordlocator alone\n\nFor additional assistance with search methods, contact DataServicesSupport@amexgbt.com.

ording to the documentation, there are two authentication methods supported for AmexGBT APIs:\n\n1. APIkey Authentication:\n- Simplest authentication method\n- Uses Consumer Key (also known as APIkey)\n- Format: `apikey: <Consumer Key>`\n- Example: `apikey: nRzRceUNwXwynRxL7AYi4rCCF8FLQ2mX`\n\n2. OAuth2 Authentication:\n- More secure option\n- Multi-step process:\n  a. Call OAuth2 API to generate access_token:\n    - URL: https://apicert.amexgbt.com/oauth2/v1/accesstoken (test)\n           https://api.amexgbt.com/oauth2/v1/accesstoken (production)\n    - Method: POST\n    - Body: grant_type=client_credentials\n    - Header: Authorization Basic xyz (Base64 encoded ConsumerKey:ConsumerSecret)\n\n  b. Use access_token in API calls:\n    - Format: `Authorization Bearer <access_token>`\n    - Valid for specific duration (expires_in)\n\nError Responses:\n- 400: Bad request (Invalid resource URL)\n- 401: Unauthorized (Invalid ClientId)\n\nFor additional authentication help, contact DataServicesSupport@amexgbt.com.

For the Get Trips API, the following headers are required:\n\nRequired Headers:\n1. Accept\n- Specifies response format\n- Values: \n  * application/xml\n  * application/json\n\n2. Authentication (one of these):\n- APIkey: [your-api-key]\nOR\n- Authorization: Bearer [access_token] (for OAuth2)\n\nExample Format:\n```\nAccept: application/json\nAPIKey: xxxxxxxxxxxxxxxxx\n```\n\nImportant Notes:\n- Headers are case-sensitive\n- Default response format is JSON\n- Must include either APIkey or OAuth2 token\n- Cannot use both authentication methods simultaneously\n\nFor additional assistance with API headers, contact DataServicesSupport@amexgbt.com.

The Get Trips API uses the following query parameters:\n\nQuery Parameters:\n\n1. tripid\n- Optional\n- Type: String\n- Purpose: GBT Trip identifier\n- Example: 00-00ddc0a0-000e-00e0-b000-00e00ebccc00\n\n2. source\n- Optional\n- Type: String\n- Purpose: 3-letter GDS code\n- Examples: AMA, SAB, APO, GAL\n- Identifies GDS where record was created\n\n3. recordlocator\n- Optional\n- Type: String\n- Purpose: 6-character alphanumeric code\n- Example: ABCDE1\n- Also known as confirmation number\n\nImportant Notes:\n- Must search using either:\n  * tripid alone \n  OR\n  * source + recordlocator combination\n- If all parameters are provided, search defaults to tripid\n- Cannot use source or recordlocator alone\n\nFor additional assistance, contact DataServicesSupport@amexgbt.com.

Here's how to retrieve a trip using Trip ID:\n\nMethod:\n```\nGET /trips/v1?tripid={TripID value}\n```\n\nRequired Steps:\n1. Format Request:\n- URL: https://apicert.amexgbt.com/trips/v1?tripid={TripID value}\n- Example TripID: 01-da1925f0-c01b-11e6-8c98-a7787795551d\n\n2. Add Required Headers:\n```\nAccept: application/json (or application/xml)\nAPIKey: [your-api-key]\n```\n\n3. Using \"Try It Out\" in Developer Portal:\n- Go to Get Trips section\n- Click \"Try It Out\"\n- Enter Trip ID in the tripid parameter field\n- Select schema version\n- Click \"Execute\"\n\nResponse:\n- Returns complete trip details in JSON or XML format (based on Accept header)\n- Includes traveler, client, agency, fare, and itinerary data\n\nFor additional assistance, contact DataServicesSupport@amexgbt.com.

Here's how to retrieve a trip using GDS source and record locator:\n\nMethod:\n```\nGET /trips/v1?source={GDS ID}&recordlocator={GDS PNR Record Locator}\n```\n\nStep-by-Step Process:\n\n1. Format Request:\n- URL: https://apicert.amexgbt.com/trips/v1?source={GDS ID}&recordlocator={Record Locator}\n- Example: source=SAB&recordlocator=WRSBHZ\n\n2. Include Required Headers:\n```\nAccept: application/json (or application/xml)\nAPIKey: [your-api-key]\n```\n\n3. Using Developer Portal's \"Try It Out\":\n- Navigate to Get Trips section\n- Click \"Try It Out\"\n- Enter source (3-letter GDS code like AMA, SAB, APO)\n- Enter recordlocator (6-character confirmation number)\n- Select schema version\n- Click \"Execute\"\n\nImportant Notes:\n- Both parameters (source and recordlocator) are required together\n- Cannot use either parameter alone\n- Response format depends on Accept header\n\nFor additional help, contact DataServicesSupport@amexgbt.com.

The Get Trips API response returns comprehensive trip information including:\n\n1. Traveler Data:\n- First/Last Name\n- Email Address\n- Phone Numbers\n- Employee ID\n- Passenger Reference ID\n\n2. Client Data:\n- Client ID (6-character code)\n- Client Name\n- Company Information\n\n3. Agency Data:\n- Booking PCC (Pseudo City Code)\n- Office ID\n\n4. Trip Details:\n- Trip ID/Display Trip ID\n- Source System\n- Record Locator\n- Creation/Update Dates\n- Trip Start/End Dates (GMT)\n- Origin/Destination\n\n5. Itinerary Data:\n- Segment Types\n- Confirmation Numbers\n- Location Codes\n- Travel Dates\n\n6. Additional Information:\n- Fare Data\n- Remarks\n- Confirmation Numbers\n\nFormat:\n- Available in JSON or XML (based on Accept header)\n- Structured response with nested data elements\n\nFor specific response field details, contact DataServicesSupport@amexgbt.com.

The Get Trips API response includes these types of data:\n\n1. Traveler Information:\n- First/Last Name\n- Email Address\n- Phone Numbers (cell, home, office)\n- Employee ID\n- Passenger Reference ID\n\n2. Client Details:\n- Client ID (6 characters)\n- Client Name\n- Company Information\n- Booking PCC (Pseudo City Code)\n\n3. Trip Information:\n- Trip ID/Display Trip ID\n- GDS Source System\n- Record Locator\n- Creation/Update Dates\n- Trip Start/End Dates (GMT format)\n- Origin/Destination Cities\n\n4. Itinerary Details:\n- Segment Types (Air, Car, Hotel, etc.)\n- Confirmation Numbers\n- Location Codes\n- Travel Dates/Times\n\n5. Additional Data:\n- Fare Information\n- Remarks\n- Agency Data\n- Booking Information\n\nResponse Format:\n- Available in JSON or XML\n- Format determined by Accept header\n\nFor detailed field descriptions, contact DataServicesSupport@amexgbt.com.

Here are the different data sections in the Get Trips API response:\n\n1. Traveler Data:\n- Personal Information:\n  * First/Last Name\n  * Email Address\n  * Phone Numbers (cell, home, office)\n- Business Information:\n  * Employee ID\n  * Passenger Reference ID\n\n2. Client Data:\n- Organization Details:\n  * Client ID (6 characters)\n  * Client Name\n  * Company Information\n- Booking Information:\n  * PCC (Pseudo City Code)\n  * Office ID\n\n3. Trip Details:\n- Identifiers:\n  * Trip ID/Display Trip ID\n  * GDS Source\n  * Record Locator\n- Dates:\n  * Creation Date\n  * Update Date\n  * Trip Start/End (GMT)\n- Locations:\n  * Origin\n  * Destination\n\n4. Itinerary Data:\n- Segment Information:\n  * Segment Types (Air, Car, Hotel)\n  * Confirmation Numbers\n  * Location Codes\n  * Travel Times/Dates\n\n5. Additional Information:\n- Fare Data\n- Remarks\n- Agency Information\n\nFor more details about specific data sections, contact DataServicesSupport@amexgbt.com.

Here are the key differences between tripid and recordlocator:\n\nTripID:\n- GBT's unique identifier for a trip (UUID format)\n- Example: 01-da1925f0-c01b-11e6-8c98-a7787795551d\n- Used alone to search for trips\n- Generated by AmexGBT systems\n- Primary search parameter (takes priority if both are provided)\n\nRecord Locator:\n- 6-character alphanumeric code\n- Example: ABCDE1\n- Generated by GDS (Global Distribution System)\n- Also known as confirmation number\n- Must be used with source (GDS ID)\n- Cannot be used alone for searching\n- Specific to the GDS where record was created\n\nUsage in API:\n```\nTripID search: \nGET /trips/v1?tripid={TripID value}\n\nRecord Locator search:\nGET /trips/v1?source={GDS ID}&recordlocator={Record Locator}\n```\n\nFor additional clarification, contact DataServicesSupport@amexgbt.com.

Based on the documentation, here are the common errors in Get Trips API:\n\nError Response Codes:\n1. HTTP 401 Unauthorized\n- Invalid API Key\n- Invalid Authorization\n- Example response:\n```json\n{\n    \"ExchangeRateResponse\": {\n        \"Success\": false,\n        \"Message\": \"Invalid ApiKey for given resource\",\n        \"StatusCode\": 401,\n        \"ReasonPhrase\": \"Unauthorized\"\n    }\n}\n```\n\n2. HTTP 502 Bad Gateway\n- Server-side issue\n- Example response:\n```json\n{\n    \"ExchangeRateResponse\": {\n        \"Success\": false,\n        \"Message\": \"Unexpected EOF at target\",\n        \"StatusCode\": 502,\n        \"ReasonPhrase\": \"Bad Gateway\"\n    }\n}\n```\n\n3. HTTP 503 Service Unavailable\n4. HTTP 504 Gateway Timeout\n\nError Categories:\n1. Application Errors (4xx):\n- Client-side issues\n- Review error glossary for troubleshooting\n\n2. Server Errors (5xx):\n- Server-side issues\n- Contact support team\n\nFor assistance with specific errors, contact DataServicesSupport@amexgbt.com.

Here are example requests for Get Trips API:\n\n1. Using Trip ID:\n```\nGET /trips/v1?tripid=01-da1925f0-c01b-11e6-8c98-a7787795551d\nHeaders:\nAccept: application/json\nAPIKey: nRzRceUNwXwynRxL7AYi4rCCF8FLQ2mX\n```\n\n2. Using GDS Source and Record Locator:\n```\nGET /trips/v1?source=SAB&recordlocator=WRSBHZ\nHeaders:\nAccept: application/json\nAPIKey: nRzRceUNwXwynRxL7AYi4rCCF8FLQ2mX\n```\n\nFull URL Examples:\nTest Environment:\n```\nhttps://apicert.amexgbt.com/trips/v1?tripid=01-da1925f0-c01b-11e6-8c98-a7787795551d\n```\nOR\n```\nhttps://apicert.amexgbt.com/trips/v1?source=SAB&recordlocator=WRSBHZ\n```\n\nNotes:\n- Response format can be JSON or XML (based on Accept header)\n- Must include valid API key\n- Use appropriate environment URL (test or production)\n\nFor additional examples, contact DataServicesSupport@amexgbt.com.

The Get Trips API supports two response formats:\n\n1. JSON Format:\n- Default format\n- Set using header: `Accept: application/json`\nExample:\n```json\n{\n    \"TripsResponse\": {\n        \"Success\": \"true\",\n        \"TransactionID\": \"58ea33c5-c41c-4142-b775-db16270ca94f\"\n    }\n}\n```\n\n2. XML Format:\n- Set using header: `Accept: application/xml`\nExample:\n```xml\n<PropertiesResponse DataSet='airport'>\n    <Property key='PHX'>Phoenix Sky Harbor Intl Apt//Phoenix//AZ//US,PHX,33.434167,-112.011667,,,,PNT,America/Phoenix,-420,840,US</Property>\n</PropertiesResponse>\n```\n\nHow to Change Format:\n1. In API Request:\n- Add appropriate Accept header\n\n2. In Developer Portal:\n- Go to Media Type in Responses section\n- Select desired format from dropdown\n- Click Execute\n\nNote: For POST & PUT requests, format is determined by Content-Type header\n\nFor format-specific questions, contact DataServicesSupport@amexgbt.com.

