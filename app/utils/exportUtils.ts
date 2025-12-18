import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportToExcel = (data: any[], fileName: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const exportElementToPDF = async (
  elementId: string,
  fileName: string
) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      onclone: (clonedDoc) => {
        // Fix oklch colors by converting them to rgb for html2canvas
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          const allElements = clonedElement.getElementsByTagName("*");
          for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i] as HTMLElement;
            const computedStyle = window.getComputedStyle(el);

            // Convert color properties
            if (computedStyle.color) {
              el.style.color = computedStyle.color;
            }
            if (computedStyle.backgroundColor) {
              el.style.backgroundColor = computedStyle.backgroundColor;
            }
            if (computedStyle.borderColor) {
              el.style.borderColor = computedStyle.borderColor;
            }
          }
        }
      },
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("ເກີດຂໍ້ຜິດພາດໃນການສ້າງ PDF. ກະລຸນາລອງໃໝ່ອີກຄັ້ງ.");
  }
};

// Keep the old one for compatibility but it won't support Lao well without fonts
export const exportToPDF = (
  headers: string[],
  data: any[][],
  fileName: string,
  title: string
) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  doc.save(`${fileName}.pdf`);
};
