// 19...24 26...31 33...35

function passwordCracker(passwords = [], loginAttempt = "") {
  if (!loginAttempt || !passwords.length) return "WRONG PASSWORD";

  const getNextWord = (attempt = "", matches) => {
    let hasMatched = false;
    let _attempt = attempt;

    const result = passwords.reduce((accumulator, currentWord) => {
      if (_attempt.startsWith(currentWord)) {
        hasMatched = true;
        _attempt = _attempt.substring(currentWord.length);
        return `${accumulator} ${currentWord}`.trim();
      }

      return accumulator;
    }, matches);

    if (!hasMatched) return [attempt, matches];

    return getNextWord(_attempt, result);
  };

  const [finalString, result] = getNextWord(loginAttempt, "");

  return finalString ? "WRONG PASSWORD" : result;
}

const atempt =
  "barcodadamanbarcodadamanbarcodadamanwewewebadamanbarcodadamanadamanweadamanwewewebwebarcodbarcodwebadamanwebbarcodwebbarcodweadamanadamanweadamanwebwebbarcodadamanweadamanwebarcodwebwebadamanwewebbarcodwebwebwewebwebbarcodweadamanbarcodwebwebwebarcodadamanbarcodweadamanwebarcodwebwebarcodwebadamanwebadamanwebwewewewebbarcodwebbarcodbarcodwebarcodwewewebadamanwebadamanbarcodwebarcodadamanweweadamanadamanwebwewewebbarcodbarcodbarcodwebwebarcodbarcodbarcodwebarcodbarcodweadamanwebwebwebbarcodbarcodbarcodwebbarcodbarcodweweadamanadamanwebwebwebwebbarcodwebbarcodweadamanwewebadamanadamanbarcodwebbarcodbarcodadamanbarcodadamanbarcodbarcodwebbarcodwebarcodwebbarcodadamanadamanwewewebbarcodwebbarcodbarcodbarcodbarcodwewebwebwewebarcodwebbarcodwebadamanbarcodwebarcodbarcodwebbarcodwebwewebwebwebarcodbarcodwebwewebadamanwebadamanbarcodwebwebadamanwebwewebadamanwewebarcodbarcodwebwebadamanwewebbarcodadamanbarcodwebbarcodwebarcodwebadamanadamanweadamanadamanwebwebarcodwebarcodbarcodadamanwebweweadamanwewebarcodweadamanadamanbarcodadamanadamanwebbarcodbarcodadamanwebwebbarcodwebadamanbarcodadamanwebweadamanwebweadamanbarcodadamanwebarcodbarcodbarcodwebweadamanadamanwebadamanwewebadamanwebwewewebwewewebwebbarcodweadamanadamanadamanbarcodwebarcodwebbarcodwebadamanwebwebwebbarcodadamanbarcodbarcodwewewebwebbarcodbarcodbarcodadamanwebbarcodwebwewebwewebarcodwewebarcodwebbarcodbarcodadamanadamanweadamanwebbarcodbarcodweadamanbarcodbarcodwebarcodwebbarcodwebbarcodbarcodwebwewewewebadamanbarcodadamanwebbarcodwebarcodweadamanadamanadamanbarcodbarcodbarcodbarcodwebbarcodweadamanwebadamanadamanwewebwebbarcodbarcodbarcodbarcodwebwebarcodadamanwebwebwebwewebadamanwebadamanwebadamanwewebarcodwebarcodwebbarcodbarcodwebbarcodadamanadamanwebwebbarcodadamanadamanbarcodwebadamanwebadamanwebadamanwebwewebadamanwewebbarcodwewebwebwebadamanwewewebwewewebwewebarcodwebwebbarcodwewebarcodwewebadamanadamanwebwebarcodbarcodwebbarcodadamanbarcodbarcodwebarcodwebwebwebadamanwebwewebbarcodbarcodwebadamanweb";

console.log(passwordCracker("we web adaman barcod".split(" "), atempt));
