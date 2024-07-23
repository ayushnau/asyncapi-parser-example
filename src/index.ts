import { NewParser } from '@asyncapi/multi-parser';

const parser = NewParser();
const parse = async () => {
    const {diagnostics} = await parser.parse('');
    console.log(diagnostics);
};

parse();