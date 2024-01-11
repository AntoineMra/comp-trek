interface TextChild {
  text: string;
  type: string;
}

interface Paragraph {
  type: string;
  children: TextChild[];
}

interface Heading {
  type: string;
  level: number;
  children: TextChild[];
}

interface ListItem {
  type: string;
  children: TextChild[];
}

interface List {
  type: string;
  format: string;
  children: ListItem[];
}

export type RichEditor = Paragraph | Heading | List;
