/** Google Script Runを定義 */
declare type GoogleScriptRun = {
    script: {
        run: {
            withSuccessHandler: (callback?: Function) => GoogleScriptRun['script']['run'];
            withFailureHandler: (callback?: Function) => GoogleScriptRun['script']['run'];
            [key: string]: any;
        };
    };
};
declare const _default: GoogleScriptRun;
export default _default;
