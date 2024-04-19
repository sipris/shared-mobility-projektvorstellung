// Checkout the original: https://www.anychart.com/blog/2020/11/11/venn-diagram-javascript/
anychart.onDocumentReady(function () {
  // set chart theme
  anychart.theme("pastel");

  var data = [
    {
      x: "I",
      value: 100,
      name: "Informational Security\nObjectives\n...",
      tooltipTitle: "Informational Security Objectives",
      tooltipDesc: "ISO27000sec\nCNSS\nISACA",
      normal: { fill: "#ABA3CC 0.7" },
      hovered: { fill: "#ABA3CC 1" },
      selected: { fill: "#ABA3CC 1" },
    },
    {
      x: "AA",
      value: 100,
      name: "Architectural Analyses",
      tooltipTitle: "Architectural Analyses",
      normal: { fill: "#ABA3CC 0.7" },
      hovered: { fill: "#ABA3CC 1" },
      selected: { fill: "#ABA3CC 1" },
    },
    {
      x: "SMC",
      value: 100,
      name: "Shared Mobility\nand\nCommunication\n.....",
      tooltipTitle: "Shared Mobility and Communication",
      tooltipDesc: "Shared Mobility:\nMobiDataLab 2022\nOMF 2022\nWendering 2024\nKe 2020\nCommunication:\nISO 17515-x",
      normal: { fill: "#ABA3CC 0.7" },
      hovered: { fill: "#ABA3CC 1" },
      selected: { fill: "#ABA3CC 1" },
    },
    {
      x: "DM",
      value: 100,
      name: "Domain Models\n..",
      tooltipTitle: "Domain Models",
      tooltipDesc: "DFD-Metamodel\nReussner 2016 (PCM)",
      normal: { fill: "#ABA3CC 0.7" },
      hovered: { fill: "#ABA3CC 1" },
      selected: { fill: "#ABA3CC 1" },
    },
    {
      x: ["I", "AA"],
      value: 20,
      name: "...",
      tooltipTitle: "Architectural Security Analysis",
      tooltipDesc: "Hahner 2023\nWalter 2023\nBoltz 2024",
      normal: { fill: "#C4CCA3 0.8" },
      hovered: { fill: "#C4CCA3 1" },
      selected: { fill: "#C4CCA3 1" },
    },
    {
      x: ["AA", "SMC"],
      value: 20,
      name: "",
      tooltipTitle: ".",
      tooltip: false,
      normal: { fill: "#C4CCA3 0.8" },
      hovered: { fill: "#C4CCA3 1" },
      selected: { fill: "#C4CCA3 1" },
    },
    {
      x: ["SMC", "DM"],
      value: 20,
      name: "",
      tooltipTitle: ".",
      normal: { fill: "#C4CCA3 0.8" },
      hovered: { fill: "#C4CCA3 1" },
      selected: { fill: "#C4CCA3 1" },
    },
    {
      x: ["I", "DM"],
      value: 20,
      name: "",
      tooltipTitle: ".",
      normal: { fill: "#C4CCA3 0.8" },
      hovered: { fill: "#C4CCA3 1" },
      selected: { fill: "#C4CCA3 1" },
    },
    {
      x: ["I", "AA", "SMC"],
      value: 30,
      name: "",
      tooltipTitle: ".",
      label: { enabled: true, fontStyle: "normal" },
      normal: { fill: "#8392ab 0.9" },
      hovered: { fill: "#8392ab 1" },
      selected: { fill: "#8392ab 1" },
      hatchFill: {
        type: "percent40",
        color: "#5f6b7d",
      },
    },
    {
      x: ["AA", "SMC", "DM"],
      value: 30,
      name: "",
      tooltipTitle: ".",
      label: { enabled: true, fontStyle: "normal" },
      normal: { fill: "#8392ab 0.9" },
      hovered: { fill: "#8392ab 1" },
      selected: { fill: "#8392ab 1" },
      hatchFill: {
        type: "percent40",
        color: "#5f6b7d",
      },
    },
    {
      x: ["SMC", "DM", "I"],
      value: 30,
      name: "",
      tooltipTitle: ".",
      label: { enabled: true, fontStyle: "normal" },
      normal: { fill: "#8392ab 0.9" },
      hovered: { fill: "#8392ab 1" },
      selected: { fill: "#8392ab 1" },
      hatchFill: {
        type: "percent40",
        color: "#5f6b7d",
      },
    },
    {
      x: ["DM", "I", "AA"],
      value: 30,
      name: ".",
      tooltipTitle: "",
      tooltipDesc: "Schwickerath et al. 2023;",
      label: { enabled: true, fontStyle: "normal" },
      normal: { fill: "#8392ab 0.9" },
      hovered: { fill: "#8392ab 1" },
      selected: { fill: "#8392ab 1" },
      hatchFill: {
        type: "percent40",
        color: "#5f6b7d",
      },
    },
    {
      x: ["I", "SMC", "AA", "DM"],
      value: 40,
      name: "Lücke",
      tooltipTitle:
        "Modellierung & Analyse eines Domänenmodells für Shared-Mobility\nSysteme hinsichtlich verschiedener Ziele der Informationssicherheit",
      // tooltipDesc: "Modellierung & Analyse eines Domänenmodells für Shared-Mobility\nSysteme hinsichtlich verschiedener Ziele der Informationssicherheit",
      label: { enabled: true, fontStyle: "normal" },
      normal: { fill: "#8392ab 0.9" },
      hovered: { fill: "#8392ab 1" },
      selected: { fill: "#8392ab 1" },
      hatchFill: {
        type: "percent40",
        color: "#5f6b7d",
      },
    },
  ];

  // create venn diagram
  var chart = anychart.venn(data);

  //   // set chart title
  //   chart
  //     .title()
  //     .enabled(true)
  //     .fontFamily("Roboto, sans-serif")
  //     .fontSize(24)
  //     .padding({ bottom: 30 })
  //     .text("The Perfect Recipe to try while working from home");

  // set chart stroke
  //   chart.stroke("1 #fff");

  // set labels settings
  chart
    .labels()
    .fontSize(16)
    .fontColor("#000")
    .hAlign("center")
    .vAlign("center")
    .fontFamily("Roboto, sans-serif")
    .fontWeight("500")
    .format("{%name}");

  // set intersections labels settings
  chart
    .intersections()
    .labels()
    .fontStyle("italic")
    .fontColor("#000")
    .format("{%name}");

  // disable legend
  chart.legend(false);

  // set tooltip settings
  chart
    .tooltip()
    .titleFormat("{%tooltipTitle}")
    .format("{%tooltipDesc}")
    .background()
    .fill("#000 0.5");

  // set container id for the chart
  chart.container("sota-container");

  // initiate chart drawing
  chart.draw();
});
