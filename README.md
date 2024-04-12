# gptpaste README

Welcome to the "gptpaste" extension for Visual Studio Code! This extension enhances your coding experience by allowing you to compile text from multiple open editor tabs into a single document. It's particularly useful for developers who need to manage pieces of code across various files and prefer a unified view for review or sharing purposes.

## Features

gptpaste lets you selectively compile text from open tabs via a user-friendly interface. Below are the key features:

- **Multi-tab Compilation**: Selectively choose which open tabs to compile into a single document.
- **Customizable Selection**: Use the Quick Pick interface to easily select the tabs you want to include in your compilation.

> Tip: Consider using animations to show the extension in action when you prepare to share or publish it.

## Requirements

No specific requirements are needed for using gptpaste, just ensure you have the latest version of Visual Studio Code installed.

## Extension Settings

gptpaste contributes the following settings to enhance configurability:

- `gptpaste.enable`: Enable or disable this extension.
- `gptpaste.includePatterns`: Customize which types of files to include by default.

## Known Issues

- Some file types might not be correctly read if they use unusual encoding.

## Release Notes

### 1.0.0

- Initial release of gptpaste.
- Feature: Compile text from multiple editor tabs.

### 1.0.1

- Fixed issue where some text was not being correctly compiled.
- Improved performance of text compilation process.

### 1.1.0

- Added customizable patterns for file inclusion.
- Improved UI for selecting tabs.

## Working with Markdown in VS Code

You can edit this README directly within Visual Studio Code. Here are some helpful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

**Enjoy using gptpaste!**
