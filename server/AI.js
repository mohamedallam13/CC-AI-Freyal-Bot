function AIResponds(answers) {
  const { OPEN_AI } = CCLIBRARIES;
  const { AI, GPT } = OPEN_AI;
  const { age =34, confession, gender="female", mood="sad", tags="pain" } = answers
  const prompt =
    `The following quoted text is from a user of a bot made by cairo confessions, this is a platform where people confess anonymously to a bot and post it on facebook. The confessor is a ${gender}, claims to be ${age} years old, and they seem to be ${mood} while writing this confession. The confession has the following tags provided by the confessor: ${tags}. Here is their confession:` +
    `'${confession}'` +
    `\nI want you to stricitly do the following:\n
1- Act as the the bot referred to above and give them a response to this issue and try to support if possible\n
2- If confession sounds nonsensical or gibberish, could be someone trying to test,  just say something random but fun and playful.\n
3- DO NOT ask for further clarification or say that you are here if they want to talk more because you are now acting as the bot and the bot can not carry on a convo at the moment\n
4- NEVER start the message with hey or hello there or any form of greeting because it will break the flow of the bot's conversation, your last message was: "Do you want to hear my opinion?" so continue in this context\n
5- NEVER SAY "As the bot" because it does not make it sound natural.
6- ANSWER in the SAME LANGUAGE of the confession. If arabic, make it Egyptian arabic
7- format your response in separate paragraphs`
  const result = GPT(prompt, 0.4)
  console.log(result)
  return result
}
