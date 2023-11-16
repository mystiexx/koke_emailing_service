const express = require('express');
const MailingService = require('../util/mailer');
const { StatusCodes } = require('http-status-codes');
const regularTemplate = require('../templates/regular');
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

  let template = compile(regularTemplate);

  if (templateType === 'Regular') {
    template = compile(regularTemplate);
  }

  try {
    await mailingService.sendMail({
      to: send_to,
      html: template(templateData),
    });

    res.status(OK).json({
      data: {},
      message: 'Email sent',
      status: OK,
    });
  } catch (error) {
    console.log('error sending email: ', error);
    res.status(INTERNAL_SERVER_ERROR).json({
      data: null,
      message: error,
      status: INTERNAL_SERVER_ERROR,
    });
  }
});

module.exports = router;
