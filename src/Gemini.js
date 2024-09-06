/**
 * Geminiを表すクラス
 * 
 * @class
 */
class Gemini {
    /**
     * @constructor
     * @param {string} apikey - APIキー
     * @param {'1.5flash' | '1.5-pro' | '1.0-pro'} model - 利用するAIモデル
     */
    constructor(apikey,model){
      this.apikey = apikey;
      if(model === '1.5flash'){
        this.model = 'gemini-1.5-flash';
      }

      if(model === '1.5-pro'){
        this.model = 'gemini-1.5-pro';
      }

      if(model === '1.0-pro'){
        this.model = 'gemini-1.0-pro';
      }
      
    }
}