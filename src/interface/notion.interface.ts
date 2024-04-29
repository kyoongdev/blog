export interface NotionDatabaseQuery {
  page_size?: number;
  start_cursor?: string;
}

export interface DatabasePropertyText {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
}

export interface DatabaseProperty {
  작성일: {
    id: string;
    type: string;
    date: {
      start: string;
      end: string | null;
      time_zone: string | null;
    };
  };
  Tags: {
    id: string;
    type: string;
    multi_select: Array<{
      id: string;
      name: string;
      color: string;
    }>;
  };
  설명: {
    id: string;
    type: string;
    rich_text: DatabasePropertyText[];
  };
  Name: {
    id: string;
    type: string;
    title: DatabasePropertyText[];
  };
}

export interface DatabaseCover {
  type: string;
  external: {
    url: string;
  };
}
