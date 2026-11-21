---
title: "iSDAsoil V2: Building Africa’s next generation of soil maps"
category: Digital soil mapping
summary: I lead the Version 2 mapping pipeline, from adding new soil observations and moving model training to the cloud through validation and deployment.
tags: [Earth Engine, Python, TensorFlow, Google Cloud]
image: /images/isdasoil-ph.webp
imageAlt: "Published iSDAsoil Version 1 map of predicted soil pH across Africa, with a colour legend"
order: 0
status: ongoing
caseNote: "I lead the Version 2 mapping pipeline at iSDA. The pH map shown here is from the published Version 1 dataset."
---

## From contributing to leading

I helped extract data and document the first version of iSDAsoil, a dataset of soil-property predictions across Africa. For Version 2, I’m responsible for the mapping pipeline from new training data through deployment. My remit covers models for 16 soil properties at two depths, including soil pH.

## Building the Version 2 pipeline

- **Prepare training data.** I integrate new soil observations and extract geospatial covariates in Google Earth Engine. I split large exports into chunks identified in the input data so they can be exported separately to Google Cloud Storage.
- **Move model training to the cloud.** I moved training from a local workflow to Google Cloud. I use Python and TensorFlow to develop and retrain the models and compare how changes to training data and weighting affect predictions.
- **Validate across space.** I group observations into spatial blocks and assign them to five folds. I train with one fold held out at a time so that validation measures how the model performs in areas it did not train on.
- **Estimate and calibrate uncertainty.** I use errors from the held-out folds to learn where predictions are likely to be more or less uncertain. I then use conformal calibration to turn those estimates into prediction intervals at several coverage levels.
- **Take models through deployment.** I’m responsible for taking the trained, validated models into the mapping workflow and through deployment, where the predictions become usable soil layers.

## Why it matters

A soil map can provide an initial estimate where local measurements are sparse. An uncertainty interval gives people using that estimate more context for deciding when they need additional evidence, such as a field sample. At iSDA, these soil predictions also underpin tools such as Virtual Agronomist.

## Published pH map

The image above is the published iSDAsoil **Version 1** pH visual, credited to the iSDAsoil dataset team. Explore the [source map and data on Zenodo](https://zenodo.org/records/4220290), the [pH layer in Google Earth Engine](https://developers.google.com/earth-engine/datasets/catalog/ISDASOIL_Africa_v1_ph), or the [iSDAsoil project](https://www.isda-africa.com/isdasoil/).
