/* =========================================
   ELEMENTS
========================================= */
const formPage = document.getElementById("formPage");
const previewArea = document.getElementById("previewArea");
const coverForm = document.getElementById("coverForm");
const backBtn = document.getElementById("backBtn");
const printBtn = document.getElementById("printBtn");
const downloadBtn = document.getElementById("downloadBtn");
const coverPage = document.getElementById("coverPage");
const coverLogo = document.getElementById("coverLogo");

/* =========================================
   OUTPUT ELEMENTS
========================================= */
const outCourseNumber =
    document.getElementById("outCourseNumber");

const outCourseTitle =
    document.getElementById("outCourseTitle");

const outAssignmentTitle =
    document.getElementById("outAssignmentTitle");

const outTeacherName =
    document.getElementById("outTeacherName");

const outTeacherDesignation =
    document.getElementById("outTeacherDesignation");

const outTeacherDepartment =
    document.getElementById("outTeacherDepartment");

const outTeacherUniversity =
    document.getElementById("outTeacherUniversity");

const outTeacherAddress =
    document.getElementById("outTeacherAddress");

const outStudentName =
    document.getElementById("outStudentName");

const outStudentBatch =
    document.getElementById("outStudentBatch");

const outStudentYear =
    document.getElementById("outStudentYear");

const outStudentId =
    document.getElementById("outStudentId");

const outStudentDepartment =
    document.getElementById("outStudentDepartment");

const outStudentUniversity =
    document.getElementById("outStudentUniversity");

const outStudentAddress =
    document.getElementById("outStudentAddress");

const outDate =
    document.getElementById("outDate");

/* =========================================
   INITIAL STATE
========================================= */
document.addEventListener("DOMContentLoaded", function () {
    formPage.style.display = "block";
    previewArea.style.display = "none";
});

/* =========================================
   GET INPUT VALUE
========================================= */
function getValue(id) {
    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value.trim();
}

/* =========================================
   BANGLA NUMBER
========================================= */
function toBanglaNumber(number) {
    const englishNumbers = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ];

    const banglaNumbers = [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ];

    return String(number)
        .split("")
        .map(function (char) {
            const index =
                englishNumbers.indexOf(char);

            if (index !== -1) {
                return banglaNumbers[index];
            }

            return char;
        })
        .join("");
}

/* =========================================
   FORMAT DATE
========================================= */
function formatBanglaDate(dateValue) {
    if (!dateValue) {
        return "";
    }

    const parts =
        dateValue.split("-");

    if (parts.length !== 3) {
        return dateValue;
    }

    const year = parts[0];

    const month =
        parseInt(parts[1], 10);

    const day =
        parseInt(parts[2], 10);

    const months = [
        "",
        "জানুয়ারি",
        "ফেব্রুয়ারি",
        "মার্চ",
        "এপ্রিল",
        "মে",
        "জুন",
        "জুলাই",
        "আগস্ট",
        "সেপ্টেম্বর",
        "অক্টোবর",
        "নভেম্বর",
        "ডিসেম্বর"
    ];

    /* =====================================
       ORDINAL DAY SUFFIX
       
       ১লা
       ২রা
       ৩রা
       ৪ঠা
       ৫ই - ১৮ই
       ১৯শে - ৩১শে
    ===================================== */
    const daySuffix = {
        1: "লা",
        2: "রা",
        3: "রা",
        4: "ঠা",
        5: "ই",
        6: "ই",
        7: "ই",
        8: "ই",
        9: "ই",
        10: "ই",
        11: "ই",
        12: "ই",
        13: "ই",
        14: "ই",
        15: "ই",
        16: "ই",
        17: "ই",
        18: "ই",
        19: "শে",
        20: "শে",
        21: "শে",
        22: "শে",
        23: "শে",
        24: "শে",
        25: "শে",
        26: "শে",
        27: "শে",
        28: "শে",
        29: "শে",
        30: "শে",
        31: "শে"
    };

    return (
        toBanglaNumber(day) +
        daySuffix[day] +
        " " +
        months[month] +
        " " +
        toBanglaNumber(year) +
        " ইং"
    );
}

/* =========================================
   SET OUTPUT
========================================= */
function setOutput(element, value) {
    if (element) {
        element.textContent = value;
    }
}

/* =========================================
   FORM SUBMIT
========================================= */
coverForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        /* COURSE */
        setOutput(
            outCourseNumber,
            getValue("courseNumber")
        );

        setOutput(
            outCourseTitle,
            getValue("courseTitle")
        );

        setOutput(
            outAssignmentTitle,
            getValue("assignmentTitle")
        );

        /* TEACHER */
        setOutput(
            outTeacherName,
            getValue("teacherName")
        );

        setOutput(
            outTeacherDesignation,
            getValue("teacherDesignation")
        );

        setOutput(
            outTeacherDepartment,
            getValue("teacherDepartment")
        );

        setOutput(
            outTeacherUniversity,
            getValue("teacherUniversity")
        );

        setOutput(
            outTeacherAddress,
            getValue("teacherAddress")
        );

        /* STUDENT */
        setOutput(
            outStudentName,
            getValue("studentName")
        );

        setOutput(
            outStudentBatch,
            "আবর্তন: " +
            getValue("studentBatch")
        );

        setOutput(
            outStudentYear,
            getValue("studentYear")
        );

        setOutput(
            outStudentId,
            "আইডি: " +
            getValue("studentId")
        );

        setOutput(
            outStudentDepartment,
            getValue("studentDepartment")
        );

        setOutput(
            outStudentUniversity,
            getValue("studentUniversity")
        );

        setOutput(
            outStudentAddress,
            getValue("studentAddress")
        );

        /* DATE */
        setOutput(
            outDate,
            formatBanglaDate(
                getValue("submissionDate")
            )
        );

        /* SHOW COVER */
        formPage.style.display = "none";
        previewArea.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }
);

/* =========================================
   BACK BUTTON
========================================= */
backBtn.addEventListener(
    "click",
    function () {
        previewArea.style.display = "none";
        formPage.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }
);

/* =========================================
   PRINT
========================================= */
printBtn.addEventListener(
    "click",
    function () {
        window.print();
    }
);

/* =========================================
   WAIT FOR IMAGES
========================================= */
function waitForImages(container) {
    const images =
        container.querySelectorAll("img");

    const promises = [];

    images.forEach(function (img) {
        if (
            img.complete &&
            img.naturalWidth > 0
        ) {
            return;
        }

        promises.push(
            new Promise(function (resolve) {
                img.addEventListener(
                    "load",
                    resolve,
                    {
                        once: true
                    }
                );

                img.addEventListener(
                    "error",
                    resolve,
                    {
                        once: true
                    }
                );
            })
        );
    });

    return Promise.all(promises);
}

/* =========================================
   WAIT FOR BROWSER PAINT
========================================= */
function waitForRender() {
    return new Promise(function (resolve) {
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                resolve();
            });
        });
    });
}

/* =========================================
   WAIT FOR FONTS
========================================= */
async function waitForFonts() {
    if (
        document.fonts &&
        document.fonts.ready
    ) {
        try {
            await document.fonts.ready;
        } catch (error) {
            console.log(
                "Font loading check skipped."
            );
        }
    }
}

/* =========================================
   SAFE FILE NAME
========================================= */
function createFileName(name) {
    let fileName =
        name ||
        "Assignment_Cover";

    fileName =
        fileName
            .replace(
                /[\\/:*?"<>|]/g,
                ""
            )
            .replace(
                /\s+/g,
                "_"
            );

    return (
        "Assignment_Cover_" +
        fileName +
        ".pdf"
    );
}

/* =========================================
   DOWNLOAD PDF
========================================= */
downloadBtn.addEventListener(
    "click",
    async function () {
        let originalWidth = "";
        let originalHeight = "";
        let originalTransform = "";
        let originalMargin = "";

        try {
            /* CHECK LIBRARIES */
            if (
                typeof html2canvas ===
                "undefined"
            ) {
                alert(
                    "html2canvas লোড হয়নি। ইন্টারনেট সংযোগ পরীক্ষা করুন।"
                );

                return;
            }

            if (
                typeof window.jspdf ===
                "undefined"
            ) {
                alert(
                    "PDF library লোড হয়নি। ইন্টারনেট সংযোগ পরীক্ষা করুন।"
                );

                return;
            }

            /* BUTTON LOCK */
            downloadBtn.disabled = true;

            downloadBtn.textContent =
                "⏳ PDF তৈরি হচ্ছে...";

            /* WAIT FOR LOGO */
            await waitForImages(
                coverPage
            );

            await waitForFonts();

            await waitForRender();

            /* SAVE ORIGINAL STYLE */
            originalWidth =
                coverPage.style.width;

            originalHeight =
                coverPage.style.height;

            originalTransform =
                coverPage.style.transform;

            originalMargin =
                coverPage.style.margin;

            /* FIX COVER FOR CAPTURE */
            coverPage.style.width =
                "794px";

            coverPage.style.height =
                "1123px";

            coverPage.style.transform =
                "none";

            coverPage.style.margin =
                "0 auto";

            await waitForRender();

            /* CREATE CANVAS */
            const canvas =
                await html2canvas(
                    coverPage,
                    {
                        width: 794,
                        height: 1123,
                        scale: 2,
                        useCORS: false,
                        allowTaint: true,
                        backgroundColor:
                            "#ffffff",
                        logging: false,
                        imageTimeout: 20000,
                        scrollX: 0,
                        scrollY: 0,
                        windowWidth: 794,
                        windowHeight: 1123
                    }
                );

            /* RESTORE COVER */
            coverPage.style.width =
                originalWidth;

            coverPage.style.height =
                originalHeight;

            coverPage.style.transform =
                originalTransform;

            coverPage.style.margin =
                originalMargin;

            /* CREATE PDF */
            const {
                jsPDF
            } = window.jspdf;

            const pdf =
                new jsPDF({
                    orientation:
                        "portrait",
                    unit: "mm",
                    format: "a4",
                    compress: true
                });

            /*
               IMPORTANT:
               PNG is used instead of JPEG.
               This keeps the charcoal/gold/white
               colours much closer to the preview.
            */
            const imageData =
                canvas.toDataURL(
                    "image/png"
                );

            /* EXACT A4 */
            pdf.addImage(
                imageData,
                "PNG",
                0,
                0,
                210,
                297,
                undefined,
                "FAST"
            );

            /* FILE NAME */
            const studentName =
                getValue(
                    "studentName"
                );

            const fileName =
                createFileName(
                    studentName
                );

            /* DOWNLOAD */
            pdf.save(fileName);

        } catch (error) {
            console.error(
                "PDF Download Error:",
                error
            );

            /*
               Restore cover even if
               PDF generation fails.
            */
            coverPage.style.width =
                originalWidth;

            coverPage.style.height =
                originalHeight;

            coverPage.style.transform =
                originalTransform;

            coverPage.style.margin =
                originalMargin;

            alert(
                "PDF তৈরি করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
            );

        } finally {
            downloadBtn.disabled =
                false;

            downloadBtn.textContent =
                "⬇️ PDF Download";
        }
    }
);

/* =========================================
   LOGO ERROR CHECK
========================================= */
coverLogo.addEventListener(
    "error",
    function () {
        console.error(
            "Logo load failed: jnulogo.png"
        );
    }
);

/* =========================================
   ENTER KEY SUPPORT
========================================= */
document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.key === "Escape" &&
            previewArea.style.display !==
            "none"
        ) {
            backBtn.click();
        }
    }
);