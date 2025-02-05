const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.generateResumePDF = async (resumeData) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const filePath = `./generated_resumes/${resumeData.name}_resume.pdf`;
    
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Header
    doc.fontSize(18).text(`${resumeData.name}'s Resume`, { align: "center" });
    doc.moveDown();

    // Resume Sections
    doc.fontSize(14).text(`Experience:`, { underline: true });
    doc.fontSize(12).text(resumeData.experience);
    doc.moveDown();

    doc.fontSize(14).text(`Skills:`, { underline: true });
    doc.fontSize(12).text(resumeData.skills);
    doc.moveDown();

    doc.fontSize(14).text(`Education:`, { underline: true });
    doc.fontSize(12).text(resumeData.education);
    doc.moveDown();

    // Finalize
    doc.end();
    stream.on("finish", () => resolve(filePath));
    stream.on("error", (err) => reject(err));
  });
};
