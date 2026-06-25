var mostWordsFound = function (sentences) {
  let n = sentences.length;
  let max = sentences[0].split(" ").length;
  for (let i = 1; i < n; i++) {
    if (sentences[i].split(" ").length > max) {
      max = sentences[i].split(" ").length;
    }
  }
  return max;
};

function mostWordsFound(sentences) {
  sentencesWords = sentences.map((sentence) => {
    return sentence.split(" ").length;
  });
  let max = sentencesWords[0];
  for (let i = 1; i < sentencesWords.length; i++) {
    if (sentencesWords[i] > max) max = sentencesWords[i];
  }
  return max;
}
