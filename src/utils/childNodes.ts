export interface HeaderNodes {
  h1?: {
    _self: HTMLElement;
    h2: HTMLElement[];
  };
  h2?: HTMLElement[];
}

export const getHeaderNodes = (node: HTMLElement): HeaderNodes[] => {
  return Array.from(node.childNodes).reduce<{
    data: HeaderNodes[];
    lastH1Idx: number;
  }>(
    (acc, next) => {
      if (next.nodeName === 'H1') {
        acc.data.push({
          h1: {
            _self: next as HTMLElement,
            h2: [],
          },
        });
        acc.lastH1Idx = acc.data.length - 1;
      } else if (next.nodeName === 'H2') {
        if (acc.lastH1Idx > -1 && acc.data[acc.lastH1Idx].h1) {
          acc.data[acc.lastH1Idx].h1?.h2.push(next as HTMLElement);
        } else {
          acc.data.push({
            h2: [next as HTMLElement],
          });
        }
      }
      return acc;
    },
    {
      data: [],
      lastH1Idx: -1,
    },
  ).data;
};
