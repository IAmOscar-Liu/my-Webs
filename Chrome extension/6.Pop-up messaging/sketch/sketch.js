function setup() {
  noCanvas();
  //let userinput = select('#userinput');
  //userinput.input(changeText);
  let userinput = document.getElementById('userinput')
  userinput.addEventListener('change',changeText);

  function changeText() {
    console.log("text changed");

    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log("got tabs");
      console.log(tabs);
      // send a message to the content script
      //let message = userinput.value();
      let msg = {
        //txt: userinput.value()
        txt:userinput.value
      };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }




  }

}