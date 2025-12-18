import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportToExcel = (data: any[], fileName: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const exportToPDF = (
  headers: string[],
  data: any[][],
  fileName: string,
  title: string
) => {
  const doc = new jsPDF();

  // Add title
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  doc.setFontSize(11);
  doc.setTextColor(100);

  // Add date
  const date = new Date().toLocaleDateString();
  doc.text(`ລາຍງານວັນທີ: ${date}`, 14, 30);

  autoTable(doc, {
    head: [headers],
    body: data,
    startY: 35,
    styles: { font: "helvetica", fontSize: 10 },
    headStyles: {
      fillStyle: "DF",
      fillColor: [13, 148, 136],
      textColor: [255, 255, 255],
    },
  });

  doc.save(`${fileName}.pdf`);
};
