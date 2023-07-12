import { Parser, fromURL, Diagnostic } from '@asyncapi/parser';

const parser = new Parser();
function prettyPrint(diagnostics: Diagnostic[]) {
    for (const diagnostic of diagnostics) {
        console.log(diagnostic.severity, diagnostic.message);
    }
}

const parse = async () => {
    const { diagnostics } = await fromURL(parser, 'https://raw.githubusercontent.com/asyncapi/spec/master/examples/simple.yml').parse();
    prettyPrint(diagnostics);
    
};

parse();