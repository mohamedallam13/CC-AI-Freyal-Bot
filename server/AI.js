function AIResponds(answers) {
  const { OPEN_AI } = CCLIBRARIES;
  const { AI, GPT } = OPEN_AI;
  const { confession } = answers
  "The following quoted text is from a user of a bot made by cairo confessions, this is a platform where people confess anonymously to a bot." +
    "'" + confession + "'" +
    "\nPlease give them a response to this issue and try to support if possible."
  const result = OPEN_AI.AI(prompt, 0.8)
  return result
}
