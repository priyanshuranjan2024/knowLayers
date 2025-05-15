const GEMINI_API_KEY='use_your_own_key_here'; // Replace with your actual API key

document.getElementById("explanations").classList.remove("hidden");
function removeMarkdownBold(text) {
  return text.replace(/\*\*/g, '');
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => window.getSelection().toString()
    }, async (results) => {
      const selectedText = results[0].result;
  
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Explain this in 3 ways: 
  1. Like I'm 5 years old,
  2. Like a college student,
  3. Like an expert.
  Text: "${selectedText}"`
            }]
          }]
        })
      });
  
      const data = await response.json();
      const output = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
      if (!output) {
        document.getElementById("loading").textContent = "No explanation received.";
        return;
      }
  
      // Use regex to extract each section as the text is weird and not formatted when received from the API :)
      const childMatch = output.match(/\*\*1\..*?\*\*(.*?)(?=\*\*2\.)/s);
      const studentMatch = output.match(/\*\*2\..*?\*\*(.*?)(?=\*\*3\.)/s);
      const expertMatch = output.match(/\*\*3\..*?\*\*(.*)/s);
  
      const child = childMatch?.[1]?.trim() || "No explanation for child.";
      const student = studentMatch?.[1]?.trim() || "No explanation for student.";
      const expert = expertMatch?.[1]?.trim() || "No explanation for expert.";

      
      document.getElementById("child").innerHTML = `<strong>Child:</strong> ` + marked.parse(child);
      document.getElementById("student").innerHTML = `<strong>College Student:</strong> ` + marked.parse(student);
      document.getElementById("expert").innerHTML = `<strong>Expert:</strong> ` + marked.parse(expert);

      

    });
  });
  

//main logic from getting the selected text to displaying the response :)