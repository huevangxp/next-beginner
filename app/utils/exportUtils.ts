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

/**
 * Export HTML element to PDF
 * @param elementId - ID of the HTML element to export
 * @param filename - Name of the file (without extension)
 * @param options - Optional configuration for PDF export
 */
export const exportElementToPDF = async (
  elementId: string,
  filename: string,
  options?: {
    orientation?: "portrait";
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

    // Clone the element to avoid modifying the original
    const clonedElement = element.cloneNode(true) as HTMLElement;
    clonedElement.style.position = "absolute";
    clonedElement.style.left = "-9999px";
    clonedElement.style.top = "0";
    document.body.appendChild(clonedElement);

    // Force color computation for all elements
    const allElements = clonedElement.querySelectorAll("*");
    allElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const computedStyle = window.getComputedStyle(htmlEl);

      // Force RGB/RGBA colors instead of oklch
      if (
        computedStyle.backgroundColor &&
        computedStyle.backgroundColor !== "rgba(0, 0, 0, 0)"
      ) {
        htmlEl.style.backgroundColor = computedStyle.backgroundColor;
      }
      if (computedStyle.color) {
        htmlEl.style.color = computedStyle.color;
      }
      if (computedStyle.borderColor) {
        htmlEl.style.borderColor = computedStyle.borderColor;
      }
    });

    // Wait a bit for styles to apply
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Create canvas from HTML element
    const canvas = await html2canvas(clonedElement, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      windowWidth: clonedElement.scrollWidth,
      windowHeight: clonedElement.scrollHeight,
    });

    // Remove cloned element
    document.body.removeChild(clonedElement);

    // Get image data
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
      // Image is wider than PDF page
      finalWidth = pdfWidth;
      finalHeight = pdfWidth / imgRatio;
    } else {
      // Image is taller than PDF page
      finalHeight = pdfHeight;
      finalWidth = pdfHeight * imgRatio;
    }

    // Center the image
    const imgX = (pdf.internal.pageSize.getWidth() - finalWidth) / 2;
    const imgY = margin;

    // Add image to PDF
    pdf.addImage(imgData, "PNG", imgX, imgY, finalWidth, finalHeight);

    // Save the PDF
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
