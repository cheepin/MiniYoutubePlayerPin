const queryToken = '?';
const splitToken = '&'
const valueToken = '=';
const str = 'https://movie.eroterest.net/?word=&c=&page=2l';

class BaseParser{
    parse(url, ...keyWord){
        return 'None';
    }

    get key(){
        return 'Nothing';
    }
}

// class QueryParser extends BaseParser {



//     get key(){
//         return 'Query';
//     }

//     parse(url, ...keyWord){
//         let urlsSplitted = url.split(queryToken);
//         let queries = urlsSplitted[1].split(splitToken);
//         let fixedQueries = [queryToken];
//         for (let query of queries){
//             let params = query.split(valueToken);
//             if (params[0].toUpperCase() == ...keyWord.toUpperCase()) {
//             let nextPage = parseInt(params[1]);
//             query = ...keyWord + valueToken + String(++nextPage);
//             }
//             fixedQueries.push(query)
//         }
//         return urlsSplitted[0] + fixedQueries.toString().replace(/,/g, '&');
//     }
// }

class RegexpParser extends BaseParser {

    get key(){
        return 'Regexp';
    }
    parse(url, ...keyWord){
        regex = keyWord[0];
        counter = keyWord[1];
        const token = '*';
        let matched = url.match(regex);
        let num = parseInt(
            matched[0].match(counter));
        let str = matched[0].match(/\D{1,}/);
        console.log(parseInt(num) + 1)
        console.log(str);
    }
}

// let url = 'https://jp.spankbang.com/s/superheroine/page25345/?o=new';
// parser = new RegexpParser();
// parser.parse(url,  /page\d{1,}/, /\d{1,}/);