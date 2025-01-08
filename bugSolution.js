This solution introduces a timeout to handle the hanging promise. While it doesn't directly solve the root problem, it prevents the app from freezing. Note:  This is a workaround, not a fix.  The ideal solution would be for Expo to address the underlying issue in their DocumentPicker API.

```javascript
import * as DocumentPicker from 'expo-document-picker';

async function pickDocument() {
  try {
    const result = await Promise.race([
      DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000)), // 5-second timeout
    ]);
    console.log('Document picked:', result);
    if(result.type === 'cancel'){
      console.log('Cancelled');
    }
  } catch (error) {
    console.error('Error picking document:', error);
  }
}
```