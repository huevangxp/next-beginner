import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Export data to Excel file
 * @param data - Array of objects to export
 * @param filename - Name of the file (without extension)
 */
export const exportToExcel = (data: any[], filename: string) => {
  try {
    if (!data || data.length === 0) {
      alert("ບໍ່ມີຂໍ້ມູນທີ່ຈະ Export");
      return;
    }

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Auto-size columns
    const maxWidth = 50;
    const columns = Object.keys(data[0] || {});
    const colWidths = columns.map((col) => {
      const maxLength = Math.max(
        col.length,
        ...data.map((row) => String(row[col] || "").length)
      );
      return { wch: Math.min(maxLength + 2, maxWidth) };
    });
    worksheet["!cols"] = colWidths;

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    alert("ເກີດຂໍ້ຜິດພາດໃນການ Export Excel");
  }
};

export const exportElementToPDF = async (
  elementId: string,
  filename: string,
  options?: {
    orientation?: "portrait" | "landscape";
    format?: "a4";
    margin?: number;
  }
) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID "${elementId}" not found`);
      alert("ບໍ່ພົບອົງປະກອບທີ່ຈະ Export");
      return;
    }

    // Render the element to a canvas with onclone callback to fix colors
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        // Find the cloned element in the cloned document
        const clonedElement = clonedDoc.getElementById(elementId);
        if (!clonedElement) return;

        // Function to convert all computed styles to inline RGB styles
        const convertToInlineStyles = (el: HTMLElement) => {
          const computedStyle = window.getComputedStyle(el);

          // Convert background color
          const bgColor = computedStyle.backgroundColor;
          if (
            bgColor &&
            bgColor !== "rgba(0, 0, 0, 0)" &&
            bgColor !== "transparent"
          ) {
            el.style.backgroundColor = bgColor;
          }

          // Convert text color
          const textColor = computedStyle.color;
          if (textColor) {
            el.style.color = textColor;
          }

          // Convert border color
          const borderColor = computedStyle.borderColor;
          if (borderColor) {
            el.style.borderColor = borderColor;
          }
        };

        // Apply to the cloned element and all its children
        convertToInlineStyles(clonedElement as HTMLElement);
        const allElements = clonedElement.querySelectorAll("*");
        allElements.forEach((el) => {
          convertToInlineStyles(el as HTMLElement);
        });
      },
    });

    // Get image data from the canvas
    const imgData = canvas.toDataURL("image/png");

    // Create PDF with specified or default options
    const orientation = options?.orientation || "landscape";
    const format = options?.format || "a4";
    const margin = options?.margin || 10;

    const pdf = new jsPDF({
      orientation,
      unit: "mm",
      format,
    });

    // Calculate dimensions to fit the page with margins
    const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2;
    const pdfHeight = pdf.internal.pageSize.getHeight() - margin * 2;

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const imgRatio = imgWidth / imgHeight;
    const pdfRatio = pdfWidth / pdfHeight;

    let finalWidth, finalHeight;
    if (imgRatio > pdfRatio) {
      finalWidth = pdfWidth;
      finalHeight = pdfWidth / imgRatio;
    } else {
      finalHeight = pdfHeight;
      finalWidth = pdfHeight * imgRatio;
    }

    // Center the image in the PDF
    const imgX = (pdf.internal.pageSize.getWidth() - finalWidth) / 2;
    const imgY = (pdf.internal.pageSize.getHeight() - finalHeight) / 2;

    // Add the image to the PDF
    pdf.addImage(imgData, "PNG", imgX, imgY, finalWidth, finalHeight);

    // Save the PDF file
    pdf.save(`${filename}.pdf`);

    console.log("PDF exported successfully");
  } catch (error) {
    console.error("Error exporting to PDF:", error);
    alert("ເກີດຂໍ້ຜິດພາດໃນການ Export PDF");
    throw error;
  }
};

/**
 * Export data to CSV file (alternative to Excel)
 * @param data - Array of objects to export
 * @param filename - Name of the file (without extension)
 */
export const exportToCSV = (data: any[], filename: string) => {
  try {
    if (!data || data.length === 0) {
      alert("ບໍ່ມີຂໍ້ມູນທີ່ຈະ Export");
      return;
    }

    // Get headers from first object
    const headers = Object.keys(data[0]);

    // Create CSV content
    const csvContent = [
      // Headers
      headers.join(","),
      // Data rows
      ...data.map((row) =>
        headers
          .map((header) => {
            const value = row[header];
            // Handle null/undefined
            if (value == null) return "";

            // Escape values containing commas, quotes, or newlines
            const stringValue = String(value);
            if (
              stringValue.includes(",") ||
              stringValue.includes('"') ||
              stringValue.includes("\n")
            ) {
              return `"${stringValue.replace(/"/g, '""')}"`;
            }
            return stringValue;
          })
          .join(",")
      ),
    ].join("\n");

    // Create blob and download with UTF-8 BOM for Excel compatibility
    const blob = new Blob(["\ufeff" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    URL.revokeObjectURL(url);

    console.log("CSV exported successfully");
  } catch (error) {
    console.error("Error exporting to CSV:", error);
    alert("ເກີດຂໍ້ຜິດພາດໃນການ Export CSV");
  }
};
