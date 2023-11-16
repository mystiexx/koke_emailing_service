module.exports=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Open sans", sans-serif;
      }
    </style>
  </head>
  <body>
    <table
      class="container"
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="width: 100%; max-width: 600px; padding: 100px 0"
    >
      <tr>
        <td>
          <p style="font-size: 16px; margin-top: 24px">Dear {{fullName}},</p>
          <p style="font-size: 16px">
            We hope this message finds you bursting with excitement because you
            are about to embark on a journey like no other! We are thrilled to
            present your personal ticket and invitation code for the most
            incredible event of the year!
          </p>

          <p>
            <span style="font-weight: 500">invitation code:</span> {{passcode}}
          </p>

          <img
            src="https://res.cloudinary.com/alonexx/image/upload/v1700174991/vendor_ticket_h364wl.jpg"
            alt="'ticket"
            style="width: 100%"
          />
        </td>
      </tr>
      <tr>
        <td style="margin-top: 40px">
          <p style="font-size: 12px; text-align: center">
            With ❤️ from koke empire time
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>

`