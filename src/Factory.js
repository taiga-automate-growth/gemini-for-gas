/**
 * Geminiを生成する
 * @param {string} apikey - APIキー
 * @param {'1.5flash' | '1.5pro' | '1.0pro'} model - 利用するAIモデル
 * @return {GeminiApiClient}
 */
function create(apikey,model){
    const gemini = new GeminiApiClient(apikey, model);
    return gemini;
}