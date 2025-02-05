const { Document, Packer, Paragraph, TextRun } = require("docx");
const fs = require("fs");

exports.generateResumeDOCX = async (resumeData) => {
  return new Promise((resolve, reject) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: `${resumeData.name}'s Resume`, bold: true, size: 28 }),
              ],
              alignment: "center",
            }),
            new Paragraph({ text: "\n" }),
            new Paragraph({ text: "Experience:", bold: true }),
            new Paragraph({ text: resumeData.experience }),
            new Paragraph({ text: "\n" }),
            new Paragraph({ text: "Skills:", bold: true }),
            new Paragraph({ text: resumeData.skills }),
            new Paragraph({ text: "\n" }),
            new Paragraph({ text: "Education:", bold: true }),
            new Paragraph({ text: resumeData.education }),
          ],
        },
      ],
    });

    const filePath = `./generated_resumes/${resumeData.name}_resume.docx`;

    Packer.toBuffer(doc).then((buffer) => {
      fs.writeFileSync(filePath, buffer);
      resolve(filePath);
    }).catch(reject);
  });
};
