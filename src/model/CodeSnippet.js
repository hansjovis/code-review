
class CodeSnippet {
  constructor( code ) {
    this.code = code;
  }

  get lines() {
    return this.code.split( "\n" );
  }

  get nrOfLines() {
    return this.lines.length;
  }

  specificLines( lineNumberRange ) {
    return this.lines.slice( lineNumberRange.start - 1, lineNumberRange.end );
  }
}

export default CodeSnippet;