function AIResponds(answers) {
  const { OPEN_AI } = CCLIBRARIES;
  const { AI, GPT } = OPEN_AI;
  const { age =34, confession, gender="female", mood="sad" } = answers
  const prompt =
     `The following quoted text is from a user of a bot made by cairo confessions, this is a platform where people confess anonymously to a bot and post it on facebook. The confessor is a ${age}, claims to be years old ${gender}, and he seems to be ${mood} while writing this confession. Here is their confession:` +
    `'${confession}'` +
    `\nPlease be aware it might be nonsensical statments sent for the sake of testing, if it is not though, please give them a response to this issue and try to support if possible; otherwise I emphaisize on the following: DO NOT ask for further clarification and just say something random but fun and playful. Additionally, do not start the message with hey or hello there or any form of greeting because it will break the flow of the conversation, your last message was: "Do you want to hear my opinion?" so continue in this context.`
  const result = AI(prompt, 1)
  console.log(result)
  return result
}
