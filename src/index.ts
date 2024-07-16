import { Parser, Diagnostic, fromFile } from '@asyncapi/parser';

const parser = new Parser();
function prettyPrint(diagnostics: Diagnostic[]) {
    for (const diagnostic of diagnostics) {
        console.log(diagnostic);
    }
}

const parse = async () => {
    const { diagnostics } = await fromFile(parser, 'asyncapi.yaml').parse();
    prettyPrint(diagnostics);
};

parse();