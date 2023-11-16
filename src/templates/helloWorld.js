module.exports = `<!DOCTYPE html>
<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
      @media only screen and (max-width: 600px) {
        /* Styles for mobile devices */
        .container {
          width: 100% !important;
          padding: 0 !important;
        }
      }
    </style>
  </head>
  <body bgcolor="#fff" style="font-family: 'Barlow', sans-serif">
    <table
      class="container"
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="width: 100%; max-width: 600px"
    >
          <p
            style="
              margin: 0;
              margin-top: 24px;
              font-size: 16px;
              color: #605d66;
              font-weight: 500;
              text-align: left;
            "
          >
            Hello World {{fullName}}.
          </p>
    </table>
  </body>
</html>`;
