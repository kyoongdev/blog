// eslint-disable-next-line import/named
import { ICommand } from '@uiw/react-md-editor';
import React from 'react';

import BoldIcon from 'assets/svg/editor/bold.svg';
import ImageIcon from 'assets/svg/editor/image.svg';
import ItalicIcon from 'assets/svg/editor/italic.svg';
import { uploadFile } from 'services/File';

type TEditorArgs = 'image' | 'bold' | 'italic';

type TEditor = {
  [key in TEditorArgs]: ICommand;
};

export const editorForm: TEditor = {
  bold: {
    name: 'bold',
    keyCommand: 'bold',
    buttonProps: { 'aria-label': 'Insert bold' },
    icon: <BoldIcon />,
    execute: async (state, api) => {
      const modifyText = `**${state.selectedText}**`;
      api.replaceSelection(modifyText);
      api.setSelectionRange({ end: state.selection.end + 1, start: state.selection.end + 1 });
    },
  },
  italic: {
    name: 'italic',
    keyCommand: 'italic',
    buttonProps: { 'aria-label': 'Insert italic' },
    icon: <ItalicIcon />,
    execute: async (state, api) => {
      const modifyText = `*${state.selectedText}*`;
      api.replaceSelection(modifyText);
      api.setSelectionRange({ end: state.selection.end + 1, start: state.selection.end + 1 });
    },
  },
  image: {
    name: 'image',
    keyCommand: 'image',
    buttonProps: { 'aria-label': 'Insert image' },
    icon: <ImageIcon />,
    execute: async (state, api) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.click();
      input.onchange = async function (e) {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          const url = await uploadFile({ file });
          const text = `![${file.name}](${url})`;
          api.replaceSelection(text);
        }
      };
    },
  },
};

export const getEditor = (...args: TEditorArgs[]) => {
  return args.map((arg) => editorForm[arg]);
};
