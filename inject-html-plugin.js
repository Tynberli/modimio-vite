export default function injectHtmlPlugin() {
    return {
      name: 'inject-html-plugin',
      transformIndexHtml(html) {
        return html.replace(
          '</body>',
          `
          <link rel="stylesheet" href="./style/main.css">
          <script src="./js/main.js"></script>
          </body>
          `
        );
      }
    };
  }
  