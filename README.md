# KnowLayers 🧠✨

## 🧩 Why I Built This

When we first encounter a new topic, it helps to understand it in stages:
1. **As simply as possible** – like explaining to a 5-year-old.
2. **With more detail** – like you're in college, learning academically.
3. **In expert terms** – for in-depth technical understanding.

I thought: _why not have an extension that gives you all three levels of explanation instantly?_ That's how **KnowLayers** was born. It uses Google's **Gemini API** to explain selected text on any webpage in 3 ways – helping with learning, revision, or just curiosity.

I personally used it for a while before deciding it's worth sharing. Hope it helps you too!

---

## 📁 Project Structure

```
KnowLayers/
├── popup.html         # Extension popup UI
├── popup.js           # Fetches selected text, sends to Gemini API, displays output
├── style.css          # Basic styling for the popup UI
├── manifest.json      # Chrome extension config (Manifest V3)
├── icon.png           # Icon shown in the Chrome toolbar
└── README.md          # You're reading it!
```

---

## ⚙️ Tech Stack

- **Chrome Extension API** (Manifest V3)
- **JavaScript** – for logic and API integration
- **HTML & CSS** – for the UI popup
- **Google Gemini API** – for generating the explanations

---

## 🛠 How to Set It Up

1. Clone/download this repo.
2. In `popup.js`, replace `GEMINI_API_KEY` with your actual Gemini API key.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer Mode**.
5. Click **Load unpacked** and select the folder of this project.
6. Done! Now, select any text on any webpage, click the extension icon, and get explanations instantly.

---

## ⚠️ Markdown Issue & Fix

While displaying the Gemini response, sometimes it comes with Markdown (like `**bold**`), which wasn’t rendering properly in the popup. I tried using the `marked.js` library from a CDN but ran into a **Content Security Policy (CSP)** issue.

> ❌ Error: _Refused to load the script... because it violates the following Content Security Policy directive: "script-src 'self'"_

To fix this, I avoided external script loading and instead cleaned up or parsed the Markdown manually using regex in `popup.js`. That way, I kept the extension secure and functional within CSP limitations. ✅

---

## 🔑 API Key

You just need to insert your **Gemini API key** in the `popup.js` file here:

```js
const GEMINI_API_KEY='use_your_own_key_here'; // Replace with your actual API key
```

---

## 🚀 How to Use

1. Select any text on a webpage.
2. Click the **KnowLayers** extension icon.
3. You'll instantly see 3 explanations:
   - 👶 Like you're 5
   - 🎓 Like a student
   - 🧠 Like an expert

Perfect for quick learning or deep dives.

---

## ⭐ If You Like It

Please consider giving this project a **star** 🌟 on GitHub – it encourages me to keep building useful things!

---

Made with ❤️ and curiosity.