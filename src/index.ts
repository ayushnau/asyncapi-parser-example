import { NewParser } from '@ayushnautiyal706020/multi-parser';

const parser = NewParser();
const parse = async () => {
    const document = {
        "asyncapi": "2.0.0",
        "info": {
            "title": "Example API",
            "version": "1.0.0"
        },
        "channels": {}
    };
    const { diagnostics } = await parser.parse(JSON.stringify(document));
    console.log(diagnostics);
};

parse();
