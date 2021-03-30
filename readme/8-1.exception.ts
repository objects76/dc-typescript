{
  // exception.
  // exception as error handling?
  //  return type?
  // where can I error handling?
  // - where can make meaningful handling: by ellie

  // tip: safe coding.
  //  make compiler error: const _:never = not_handled.

  function readFile(fileName: string): string {
    if (fileName === "not existed") {
      throw Error(`No file: ${fileName}`);
    }

    return `data from ${fileName}`;
  }

  function closeFile(fileName: string) {}
}
