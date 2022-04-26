const messages = {
  title: "Hello",
  newMessagePlaceholder: "Enter the message ..",
  invalidCommand: "Command is invalid. Please check the command guide below ..",
  invalidNickCommand:
    "It seems that you have tried to change nick. Check once again command guide ..",
  invalidUndoLastMessageCommand:
    "It seems that you have tried to undo last message. To undo last message just type /oops",
  invalidFadeLastMessageCommand:
    "It seems that you have tried to fade last message. Just type /fadelast",
  invalidHighlightMessageCommand:
    "It seems that you have tried to highlight specific message. Check once again command guide ..",
  invalidThinkMessageCommand:
    "It seems that you have tried to send think message. Check once again command guide ..",
  noMessageExistsToUndo:
    "It seems that you need first to write a message before trying to undo the last message ..",
  noMessageExistsToFade: "There is no message which we can fade ..",
  noMessageExistsToHighlight:
    "That message not exists. Please double check your command ..",
  wrongCountdownCommand:
    "It seems that you have tried to start countdown. Check once again command guide ..",
  countdownAlreadyStarted:
    "Countdown already started. You will be redirected soon ..",
  defaultMyNick: "Stranger",
  undoLastMessageCommandDescription: "Undo last sent message",
  nickChangeCommandDescription:
    "Changes your nickname (Between 3 and 8 characters, no spaces allowed)",
  fadeLastCommandDescription: "Fade the last message in chat",
  highlightMessageCommandDescription:
    "Highlights specific existing messages. After command provide message which you would like to highlight. For example: '/highlight hello'",
  countdownCommandDescription:
    "Starts a countdown timer which will redirect you to specified URL. URL should include protocol prefix (http, https, ftp)",
  thinkCommandDescription:
    "Type /think before message which you would like to send. It will appear in grey color. For example: '/think hello mate'",
  commands: "Commands:",
  redirectionInfo: "Redirection in:",
};

export default messages;
