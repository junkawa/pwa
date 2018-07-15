const fs = require('fs');
const readline = require('readline');

const toRoman = ( () => {

    const roman = {

        '１':'1', '２':'2', '３':'3', '４':'4', '５':'5', '６':'6', '７':'7', '８':'8', '９':'9', '０':'0',
        '！':'!', '”':'"', '＃':'#', '＄':'$', '％':'%', '＆':'&', '’':"'", '（':'(', '）':')', '＝':'=',
        '～':'~', '｜':'|', '＠':'@', '‘':'`', '＋':'+', '＊':'*', '；':";", '：':':', '＜':'<', '＞':'>',
        '、':',', '。':'.', '／':'/', '？':'?', '＿':'_', '・':'･', '「':'[', '」':']', '｛':'{', '｝':'}',
        '￥':'\\', '＾':'^',
        
        'ファ':'fa', 'フィ':'fi', 'フェ':'fe', 'フォ':'fo',

        'キャ':'kya', 'キュ':'kyu', 'キョ':'kyo',
        'シャ':'sha', 'シュ':'shu', 'ショ':'sho',
        'チャ':'tya', 'チュ':'tyu', 'チョ':'tyo',
        'ニャ':'nya', 'ニュ':'nyu', 'ニョ':'nyo',
        'ヒャ':'hya', 'ヒュ':'hyu', 'ヒョ':'hyo',
        'ミャ':'mya', 'ミュ':'myu', 'ミョ':'myo',
        'リャ':'rya', 'リュ':'ryu', 'リョ':'ryo',

        'フャ':'fya', 'フュ':'fyu', 'フョ':'fyo',
        'ピャ':'pya', 'ピュ':'pyu', 'ピョ':'pyo',
        'ビャ':'bya', 'ビュ':'byu', 'ビョ':'byo',
        'ヂャ':'dya', 'ヂュ':'dyu', 'ヂョ':'dyo',
        'ジャ':'ja',  'ジュ':'ju',  'ジョ':'jo',
        'ギャ':'gya', 'ギュ':'gyu', 'ギョ':'gyo',

        'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po',
        'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo',
        'ダ':'da', 'ヂ':'di', 'ヅ':'du', 'デ':'de', 'ド':'do',
        'ザ':'za', 'ジ':'zi', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo',
        'ガ':'ga', 'ギ':'gi', 'グ':'gu', 'ゲ':'ge', 'ゴ':'go',

        'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro',
        'ヤ':'ya',            'ユ':'yu',            'ヨ':'yo',
        'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', 'モ':'mo',
        'ハ':'ha', 'ヒ':'hi', 'フ':'hu', 'ヘ':'he', 'ホ':'ho',
        'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no',
        'タ':'ta', 'チ':'ti', 'ツ':'tu', 'テ':'te', 'ト':'to',
        'サ':'sa', 'シ':'si', 'ス':'su', 'セ':'se', 'ソ':'so',
        'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko',
        'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o',
        'ァ':'la', 'ィ':'li', 'ゥ':'lu', 'ェ':'le', 'ォ':'lo',
        //'ワ':'wa', 'ウィ':'wi', 'ウ':'wu', 'ウェ':'we', 'ヲ':'wo',
        'ワ':'wa', 'ウィ':'wi', 'ウェ':'we', 'ヲ':'wo',

        'ヶ':'ke', 'ヵ':'ka',        'ン':'n',  'ー':'-', '　':' '

    };
    const reg_tu  = /ッ([bcdfghijklmnopqrstuvwyz])/gm;
    const reg_xtu = /ッ/gm;

    return ( str ) => {
        let pnt = 0;
        const max = str.length;
        let s, r;
        let txt = '';
        
        while( pnt <= max ) {
            if( r = roman[ str.substring( pnt, pnt + 2 ) ] ) {
                txt += r;
                pnt += 2;
            } else {
                txt += ( r = roman[ s = str.substring( pnt, pnt + 1 ) ] ) ? r: s;
                pnt += 1;
            }
        }
        txt = txt.replace( reg_tu, '$1$1' );
        txt = txt.replace( reg_xtu, 'xtu' );
        return txt;
    };
})();

const stream = fs.createReadStream("./Noun.utf8.csv", "utf8");
 
const reader = readline.createInterface({ input: stream });

console.log('[');
reader.on('line', (data) => {
    const kana = data.split(',')[11];
    const roma = toRoman(kana);
    console.log('"'+roma+'",');
});
reader.on('close', () => {
    console.log(']');
});
