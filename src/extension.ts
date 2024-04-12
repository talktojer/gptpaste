import * as vscode from 'vscode';

interface ExtendedQuickPickItem extends vscode.QuickPickItem {
    document: vscode.TextDocument;  // Extend QuickPickItem to include the document
}

export function activate(context: vscode.ExtensionContext) {
    let openDocuments = new Set<vscode.TextDocument>();

    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(document => {
        openDocuments.add(document);
    }));

    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(document => {
        openDocuments.delete(document);
    }));

    let disposable = vscode.commands.registerCommand('gptpaste.collectAndSubmit', async () => {
        // Prepare quick pick items ensuring that every item has a non-undefined label
        const picks: ExtendedQuickPickItem[] = Array.from(openDocuments).map(doc => ({
            label: doc.fileName.split('/').pop() || 'Unnamed Document',  // Ensure label is never undefined
            description: doc.fileName,
            document: doc
        }));

        const selectedPicks = await vscode.window.showQuickPick(picks, {
            canPickMany: true,
            placeHolder: 'Select the tabs you want to compile text from'
        });

        if (selectedPicks && selectedPicks.length > 0) {
            const contents = selectedPicks.map(pick => `File: ${pick.description}\n${pick.document.getText()}\n\n`);
            const joinedContents = contents.join('------------------------------------------------\n');

            const doc = await vscode.workspace.openTextDocument({
                language: 'text',
                content: joinedContents
            });
            vscode.window.showTextDocument(doc, { preview: false });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
