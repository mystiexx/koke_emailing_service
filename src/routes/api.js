const express = require('express');
const MailingService = require('../util/mailer');
const { StatusCodes } = require('http-status-codes');
const helloWorldTemplate = require('../templates/helloWorld');
const { compile } = require('handlebars');

const { OK, INTERNAL_SERVER_ERROR } = StatusCodes;

const router = express.Router();

router.post('/send-email', async (req, res) => {
  const mailingService = new MailingService();
  const {
    templateType,
    send_to = 'aloneroland@gmail.com',
    templateData = {
      fullName: 'Enola Roland',
    },
  } = req.body;

  let template = compile(helloWorldTemplate);

  if (templateType === 'HELLO_WORLD') {
    template = compile(helloWorldTemplate);
  }

  try {
    await mailingService.sendMail({
      to: send_to,
      html: template(templateData),
    });
  } catch (error) {
    console.log('error sending email: ', error);
    res.status(INTERNAL_SERVER_ERROR).json({
      data: null,
      error: error,
    });
  }
});

module.exports = router;
