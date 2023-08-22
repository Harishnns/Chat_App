const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message !== "") {
        displayMessageWithEmojis(`You: ${message}`);
        messageInput.value = "";
    }
});

function displayMessageWithEmojis(message) {
    const emojiMappings = {
        react: "🚀",
        woah: "😲",
        hey: "👋",
        lol: "😂",
        likes: "👍",
        congratulations: "🎉"
    };

    const words = message.split(" ");
    const messageWithEmojis = words.map(word => {
        const lowercaseWord = word.toLowerCase();
        if (emojiMappings.hasOwnProperty(lowercaseWord)) {
            return emojiMappings[lowercaseWord];
        }
        return word;
    }).join(" ");

    const messageElement = document.createElement("div");
    messageElement.textContent = messageWithEmojis;
    chatBox.appendChild(messageElement);
}
