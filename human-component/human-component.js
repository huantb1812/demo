function HumanMap(container) {

    human = {
        head: [],
        chest: [],
        abdomen: [],
        arm: [],
        pelvis: [],
        legs: [],
    }
    human.head = ["Brain", "Ear", "Eye", "Face", "Hair", "Mouth", "Nose", "Throat", "Head", "Neck", "Blood", "Bones and Joints", "Hormones", "Jaw", "Lymph nodes", "Nerves and Nervous System", "Skin"];
    human.chest = ["Back", "Breast", "Heart", "Lungs", "Spine", "Thyroid", "Blood", "Bones and Joints", "Hormones", "Lymph nodes", "Nerves and Nervous System", "Skin"];
    human.abdomen = ["Appendix", "Colon", "Gallbladder", "Kidney", "Liver", "Pancreas", "Rectum", "Stomach", "Blood", "Bones and Joints", "Hormones", "Lymph nodes", "Nerves and Nervous System", "Skin", "Spleen"];
    human.arm = ["Elbow", "Finger", "Hand", "Shoulder", "Wrist", "Blood", "Bones and Joints", "Hormones", "Lymph nodes", "Nerves and Nervous System", "Skin"];
    human.pelvis = ["Bladder", "Groin", "Hip", "Uterus", "Blood", "Bones and Joints", "Hormones", "Lymph nodes", "Nerves and Nervous System", "Skin"];
    human.legs = ["Ankle", "Foot", "Heel", "Knee", "Blood", "Bones and Joints", "Hormones", "Lymph nodes", "Nerves and Nervous System", "Skin"];

    human.conditionsItems = {
        brain: ["Acoustic Neuroma (Vestibular Schwannoma)", "Adult Hydrocephalus", "Aortic Dissection ", "Autism", "Autistic Spectrum Disorder (Child)", "Behaviour", "Bonding With Your Child", "Brain Aneurysm", "Brain Scan", "Brain Tumour Biopsy", "Brain Tumours", "Brain cancer", "Cancer", "Carotid Endarterectomy", "Cerebral Aneurysm", "Childhood Anxiety Disorders", "Chronic Subdural Haematoma", "Cognitive-Behavioural Therapy", "Common Sleep Conditions in Infants, Children and Adolescents ", "Computed Tomography (CT)", "Confidence", "Convulsion Without Fever", "Decompressive Craniectomy", "Dementia", "Depression", "Development", "Epilepsy", "Excessive Daytime Sleepiness", "External Ventricular Drainage", "Febrile Fit", "Head Injury (Child)", "Headaches", "Insomnia", "Intracerebral Hemorrhage", "Intrathecal Drug Delivery", "Jet Lag, Shift Work and Circadian Rhythm Disorders", "Learning  ", "Lumbar Puncture", "Magnetic Resonance Imaging (MRI) Scan", "Meningiomas", "Metastatic Brain Tumours", "Minimally Invasive Surgery (MIS) Procedures in Neurosurgery", "Neurodevelopment in Babies", "Neuropathic (Nerve) Pain Syndrome", "Neurovascular", "Obstructive Sleep Apnoea ", "Obstructive Sleep Apnoea in Children", "Parasomnias in Adults", "Parasomnias in Children ", "Parkinson Disease and Movement Disorders", "Perinatal Depression", "Pituitary Tumours", "Play", "Postnatal Depression", "Radiofrequency Lesioning (Thermoablation) ", "Restless Legs Syndrome and Periodic Limb Movements in Sleep", "Senses  ", "Skull Base", "Sleep (Child)", "Sleep Deprivation", "Sleep Disorders", "Sleep Physiology", "Sleep-disordered Breathing and Snoring", "Sleepwalking", "Sleepy Driving", "Stroke", "Talk", "Ventricular Peritoneal Shunt", "Young Onset Cognitive Impairment (YOCI)"],
        ear: ["Acoustic Neuroma (Vestibular Schwannoma)", "Acute Pharyngitis and Tonsillitis", "Cochlear Implant", "Ear Infections (Child)", "Ear Objects", "Ear Otitis Media  ", "Earwax in Children", "External Ear Infections - Otitis Externa", "External Ear Infections - Pinna Infection", "Hearing", "Hearing Loss", "Hearing Tests", "Middle Ear Infections  - Chronic Suppurative Otitis Media", "Middle Ear Infections - Acute Otitis Media", "Minimally Invasive Surgery (MIS) Procedures in Otolaryngology (Ear, Nose and Throat)", "Otitis Media with Effusion", "Senses  ", "Tinnitus", "Travelling", "Universal Newborn Hearing Screening"],
        eye: ["Aesthetic Eyelid Surgery (Blepharoplasty)", "Age-related Macular Degeneration", "Allergies (Child)", "Amblyopia (Lazy Eye)", "Anophthalmia, Microphthalmia, Post Enucleation Socket Syndrome (PESS) and Socket reconstruction ", "Astigmatism", "Blepharitis", "Cataract", "Central Serous Chorioretinopathy", "Childhood Myopia", "Conjunctivitis and Viral Conjunctivitis", "Corneal Infections", "Corneal Oedema", "Diabetic Retinopathy", "Double Vision (Diplopia)", "Dry Eye Syndrome", "Entropion", "Epiblepharon", "Epiretinal Membrane (Macular Pucker)", "Floaters & Flashes", "Glaucoma", "Hyperopia (Long-sightedness)", "Ischaemic Optic Neuropathy", "Macular Hole", "Myopia (Short-sightedness or Near-sightedness)", "Myopic Maculopathy", "Obstructive Jaundice", "Ocular Inflammation and Immunology", "Optic Neuritis", "Orbital Tumours and Disorders", "Presbyopia (Lao Hua)", "Proliferative Vitreoretinopathy ", "Pterygium", "Retinal Detachment", "Retinal Tear", "Retinal Vascular Disorders", "Retinopathy of Prematurity (ROP)", "Sleepwalking", "Spasms", "Squints", "Squints (Strabismus)", "Tearing Disorders", "Thyroid Eye Disease", "Upper Eyelid Drooping (Ptosis)"],
        face: ["Cleft Lip and Palate", "Cleft Lip and Palate in Children", "Facial Pain", "Facial Pain (Trigeminal Neuralgia) ", "Functional Neurosurgery", "Jaw Joint (Temporomandibular Joint) Surgery  ", "Obstructive Sleep Apnea", "Orthognathic Surgery"],
        hair: [],
        mouth: ["Acute Laryngotracheobrontis (ALTB) or Croup (Child)", "Acute Pharyngitis and Tonsillitis", "Bridges", "Cleft Lip and Palate", "Cleft Lip and Palate in Children", "Convulsion Without Fever", "Cough and Colds", "Croup", "Crowns", "Crying", "Dental Implant", "Denture", "Discoloured Teeth", "Early Childhood Caries", "Endodontic Surgery", "Fillings", "Fussy Eater", "Gastrointestinal Tract Functions and Investigations", "Hand Foot and Mouth Disease", "Hemoptysis", "Jaw Cysts and Tumours", "Jaw Malalignment  ", "Mouth Ulcers", "Obstructive Sleep Apnea", "Oral Cancers", "Oropharyngeal Cancers", "Orthognathic Surgery", "Overweight", "Radio-iodine (I-131) Treatment", "Salivary Gland Infection/Inflammation (Sialedenitis)", "Salivary Gland Tumours", "Snoring in Children", "Swallowing Difficulties", "Talk", "Temporomandibular Joint Disorder", "Tonsil and Adenoids", "Tooth Avulsion (Knocked-out Tooth)", "Travelling", "Veneers", "Vitamin Supplements", "Vomitting", "Weaning"],
        nose: ["Acoustic Neuroma (Vestibular Schwannoma)", "Allergic Rhinitis", "Bronchiolitis", "Cancer", "Common Sleep Conditions in Infants, Children and Adolescents ", "Cough and Colds", "Croup", "Crying", "Epistaxis", "Minimally Invasive Surgery (MIS) Procedures in Otolaryngology (Ear, Nose and Throat)", "Nasal Polyps", "Nasopharyngeal Cancer", "Nose - Virtual Tour", "Nosebleeds in Children  ", "Obstructive Sleep Apnea", "Obstructive Sleep Apnoea (OSA)", "Obstructive Sleep Apnoea - Continuous Positive Airway Pressure Therapy", "Obstructive Sleep Apnoea in Children", "Oropharyngeal Cancers", "Paranasal Sinus Tumours", "Rhinitis", "Senses  ", "Sinusitis", "Sleep (Child)", "Sleep-disordered Breathing and Snoring", "Snoring and Obstructive Sleep Apnoea (OSA)", "Snoring in Children"],
        throat: ["Acoustic Neuroma (Vestibular Schwannoma)", "Acute Laryngotracheobrontis (ALTB) or Croup (Child)", "Acute Pharyngitis and Tonsillitis", "Allergic Rhinitis", "Cough and Colds", "Croup", "Crying", "Dysphagia Difficulty in Swallowing", "Enlarged Neck Lymph Nodes", "Esophageal Cancer", "Hemoptysis", "Hypopharyngeal Cancers", "Injuries (Child)", "Larynx Cancer", "Medical Nutrition Therapy for Swallowing Difficulty (Dysphagia)", "Minimally Invasive Surgery (MIS) Procedures in Otolaryngology (Ear, Nose and Throat)", "Neck Lumps", "Obstructive Sleep Apnoea (OSA)", "Odynophagia (Pain on Swallowing)", "Oesophageal Cancer", "Oral Cancers", "Oropharyngeal Cancers", "Salivary Gland Infection/Inflammation (Sialedenitis)", "Salivary Gland Tumours", "Snoring and Obstructive Sleep Apnoea (OSA)", "Snoring in Children", "Swallowing Difficulties", "Throat - Virtual Tour", "Thyroglossal Duct Cysts", "Thyroid Cancer", "Thyroid Nodules", "Thyroid Nodules and Surgery", "Tonsil and Adenoids", "Voice Check", "Voice Disorders - Acute and Chronic Laryngitis ", "Voice Disorders - Muscle Tension Dysphonia", "Voice Disorders - Vocal Fold Paralysis", "Voice Disorders - Vocal Nodules, Polyps, Cysts and Tumours", "Voice Hygiene"],
        head: ["Acute Pharyngitis and Tonsillitis", "Brain cancer", "Circadian Rhythm: Coping With Shift Work", "Computed Tomography (CT)", "Decompressive Craniectomy", "Head Injury", "Head Injury (Child)", "Head and Neck Cancer", "Head and Neck Reconstruction: Local Flaps", "Head and Neck Reconstruction: Microsurgical Free Flaps  ", "Head and Neck Reconstruction: Regional Flaps", "Head and Neck Surgery", "Headache in Children", "Headaches", "Nasopharyngeal Cancer", "Neurotrauma", "Plagiocephaly", "Skin and Subcutaneous Lumps – Skin Cancers, Lipomas, Epidermoid Cysts", "Sleep Disorders"],
        neck: ["Acute Pharyngitis and Tonsillitis", "Allergies (Child)", "Arthritis", "Bone Mineral Density Scan (DEXA)", "Bone Scan", "Brain cancer", "Carotid Endarterectomy", "Computed Tomography (CT)", "Head and Neck Cancer", "Head and Neck Reconstruction: Local Flaps", "Head and Neck Reconstruction: Microsurgical Free Flaps  ", "Head and Neck Reconstruction: Regional Flaps", "Head and Neck Surgery", "Headaches", "Hyperthyroidism", "Hypothyroidism", "Hypothyroidism (Child)", "Larynx Cancer", "Musculoskeletal Disorders and Office Ergonomics ", "Nasopharyngeal Cancer", "Neck Pain", "Rheumatoid Arthritis", "Skin and Subcutaneous Lumps – Skin Cancers, Lipomas, Epidermoid Cysts", "Snoring and Obstructive Sleep Apnoea (OSA)", "Thyroid Disorders", "Thyroid Scan", "Torticollis"],
        blood: ["Abnormal Blood Tests", "Anaemia", "Antenatal Screening For Human munodeficiency Virus (HIV", "Antibiotics", "Bleeding Tendency", "Cancer", "Chemotherapy", "Cholesterol", "Deep Vein Thrombosis", "Dengue Fever", "Dialysis", "Dicopac Test", "Febrile Fit", "Fever", "Hemoptysis", "Hepatitis B", "Lymphoedema", "Menopause", "Multiple Myeloma", "Thalassaemia"],
        'bones and joints': ["Back Pain and Spine Deformity in Children and Adolescents", "Cancer Pain", "Chronic Back Pain", "Injuries (Child)", "Orthopaedic Problems in Children", "Osteoporosis", "Play", "Sarcoma", "Sport Injuries in Children "],
        hormones: [],
        jaw: ["Dental Implant", "Early Childhood Caries", "Obstructive Sleep Apnea", "Orthognathic Surgery", "Temporomandibular Joint Disorder"],
        'lymph nodes': ["Lymphoedema", "Lymphoma"],
        'nerves and nervous system': ["Allergic Rhinitis", "Circadian Rhythm: Coping With Shift Work", "Depression", "Insomnia", "Jet Lag, Shift Work and Circadian Rhythm Disorders", "Limit-Setting Type Behavioural Insomnia in Childhood (BIC)", "Neuropathic (Nerve) Pain Syndrome", "Neurostimulation (Spinal Cord Stimulation) ", "Sleep Deprivation", "Sleep Onset Association Type BIC", "Sleep-disordered Breathing and Snoring", "Sleepy Driving", "Sympathetic Blocks"],
        skin: ["Allergies (Child)", "Antibiotics", "Dengue Fever", "Eczema (Child)", "Effective Obesity Management", "Febrile Fit", "Fever", "Injuries (Child)", "Intrathecal Drug Delivery", "Jaundice", "Obstructive Jaundice", "Rheumatoid Arthritis", "Skin Cancer", "Skin Infections ", "Skin and Subcutaneous Lumps – Skin Cancers, Lipomas, Epidermoid Cysts"]
    };

    human.statelist_selector = `${container} .statelist`;
    human.conditions_selector = `${container} .conditions`;

    human.default_option = {
        fillColor: 'ff0000',
        stroke: true,
        singleSelect: true,
        fillOpacity: 0.2,
        mapKey: 'data-state',
        onClick: function (e) {
            document.querySelector(human.statelist_selector).innerHTML = '';
            document.querySelector(human.conditions_selector).innerHTML = '';
            human[e.key.toLowerCase()].forEach(item => {
                let option = document.createElement("div");
                option.innerText = item;
                option.classList = ['item']
                option.addEventListener('click', () => {
                    let currentActived = document.querySelector(human.statelist_selector + " .item.actived");
                    if (currentActived) {
                        currentActived.classList.remove('actived');
                    }
                    document.querySelector(human.conditions_selector).innerHTML = '';
                    setTimeout(() => {
                        option.classList.add('actived')
                        human.showMenuChild(item);
                    }, 100);

                }, true);
                document.querySelector(human.statelist_selector).append(option)
            })

        },
    };

    human.showMenuChild = function (event) {
        if (human.conditionsItems[event.toLowerCase()] && human.conditionsItems[event.toLowerCase()].length > 0) {
            document.querySelector(human.conditions_selector).classList.remove('no-record');

            human.conditionsItems[event.toLowerCase()].forEach(item => {
                let option = document.createElement("div");
                option.innerText = item;
                option.classList = ['item'];
                option.addEventListener('click', () => {
                    let currentActived = document.querySelector(human.conditions_selector + " .item.actived");
                    if (currentActived) {
                        currentActived.classList.remove('actived');
                    }
                    setTimeout(() => {
                        option.classList.add('actived')
                    }, 100);

                }, true);
                document.querySelector(human.conditions_selector).append(option)
            })
        } else {
            document.querySelector(human.conditions_selector).innerHTML = 'No data';
            document.querySelector(human.conditions_selector).classList.add('no-record');
        }
    }
    return human;
}


/**
 * Get the input component class by referencing Formio.Components.components map.
 */
var InputComponent = Formio.Components.components.input;

/**
 * Create a new HumanMapComponent "class" using ES5 class inheritance notation. 
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 * 
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
function HumanMapComponent(component, options, data) {
    InputComponent.prototype.constructor.call(this, component, options, data);
}

// Perform typical ES5 inheritance
HumanMapComponent.prototype = Object.create(InputComponent.prototype);
HumanMapComponent.prototype.constructor = HumanMapComponent;

/**
 * Define what the default JSON schema for this component is. We will derive from the InputComponent
 * schema and provide our overrides to that.
 * @return {*}
 */
HumanMapComponent.schema = function () {
    return InputComponent.schema({
        type: 'husmanmap',
        numRows: 3,
        numCols: 3
    });
};

/**
 * Register this component to the Form Builder by providing the "builderInfo" object.
 * 
 * @type {{title: string, group: string, icon: string, weight: number, documentation: string, schema: *}}
 */
HumanMapComponent.builderInfo = {
    title: 'Human Map',
    group: 'basic',
    icon: 'fa fa-male',
    weight: 70,
    documentation: 'http://help.form.io/userguide/#table',
    schema: HumanMapComponent.schema(),
};

/**
 *  Tell the renderer how to render this component.
 */
HumanMapComponent.prototype.render = function (element) {
    var name = 'map' + Math.floor(Math.random() * 1001);
    hm = `
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Conditions & Treatments and Medicines</h4>
                <div class="demo-map">
                    <div class="row">
                        <div class="col-3">
                            <img class="map"
                                src="https://www.singhealth.com.sg/_catalogs/masterPage/SHRevamp2017/assets/img/placeholder-body--big.png"
                                width="142" height="414" usemap="#${name}">
                            <map name="${name}">
                                <area target="_self" alt="HEAD" title="HEAD" href="#" name="head" data-state="HEAD"
                                    data-full="head head"
                                    coords="35,68,43,65,49,63,55,60,57,54,57,47,54,41,51,34,50,26,49,19,51,12,54,6,60,3,62,2,68,0,75,0,80,2,84,4,89,8,92,13,93,17,93,24,92,31,91,37,90,40,87,45,85,50,86,56,90,62,96,64,107,67"
                                    shape="poly" class="">
                                <area target="_self" alt="CHEST" title="CHEST" href="#" name="chest" data-state="CHEST"
                                    data-full="chest chest" coords="31,68,31,116,35,126,108,127,109,121,111,115,112,67"
                                    shape="poly" class="">
                                <area class="active highlight" target="_self" alt="ABDOMEN" title="ABDOMEN" href="#"
                                    name="abdomen" data-state="ABDOMEN" data-full="abdomen abdomen"
                                    coords="35,126,107,127,106,135,105,142,105,150,105,158,105,167,37,166,38,157,38,149,38,141,37,132"
                                    shape="poly">
                                <area target="_self" alt="ARM" title="ARM" href="#" name="arm" data-state="ARM"
                                    data-full="arm arm"
                                    coords="30,68,25,68,18,71,14,77,12,83,11,89,11,96,11,101,9,108,7,114,6,120,5,126,5,133,4,140,5,147,3,155,1,162,0,168,1,174,1,180,1,186,2,192,2,198,1,206,1,211,3,217,4,223,7,228,11,233,15,237,21,239,18,230,14,224,14,216,23,228,22,217,17,208,14,199,16,191,19,183,21,173,22,164,22,155,24,148,26,141,27,133,29,126,31,115,31,67"
                                    shape="poly">
                                <area target="_self" alt="ARM" title="ARM" href="#" name="arm" data-state="ARM"
                                    data-full="arm arm"
                                    coords="112,67,118,68,123,71,128,75,130,81,132,87,132,93,132,100,133,107,135,113,137,119,138,126,138,132,139,138,139,144,139,151,140,157,142,163,142,169,142,175,142,181,141,189,141,196,140,203,141,209,141,215,140,221,137,226,134,231,130,236,128,238,124,239,122,238,128,225,129,217,121,227,121,220,123,213,125,209,128,204,128,196,126,189,124,182,122,174,121,166,120,158,120,152,118,145,116,137,114,129,113,122,111,115"
                                    shape="poly">
                                <area target="_self" alt="PELVIS" title="PELVIS" href="#" name="pelvis"
                                    data-state="PELVIS" data-full="pelvis pelvis"
                                    coords="37,166,35,171,34,177,33,183,32,189,31,196,30,203,30,210,30,215,113,216,113,210,112,202,112,195,111,187,110,180,108,173,106,167"
                                    shape="poly">
                                <area target="_self" alt="LEG" title="LEG" href="#" name="legs" data-state="legs"
                                    data-full="legs legs"
                                    coords="30,215,29,221,29,229,30,236,30,243,31,250,32,258,33,266,35,272,37,279,39,286,40,292,40,298,39,303,39,310,38,317,38,323,38,329,39,336,40,341,42,347,43,354,44,360,45,366,46,372,46,378,47,383,46,388,43,394,42,399,39,407,40,409,47,411,53,412,59,413,62,412,63,405,60,394,60,383,60,371,61,363,63,354,64,347,65,339,66,331,66,322,65,312,63,302,64,292,65,284,65,275,65,263,67,253,68,241,68,233,68,225,69,215,75,215,75,222,75,229,75,236,75,241,76,250,77,258,78,265,78,271,78,279,78,286,79,293,79,302,77,310,77,318,77,325,77,333,78,344,81,354,82,362,83,370,84,378,84,387,83,396,82,402,80,409,83,413,90,412,97,411,102,409,103,407,103,404,100,396,97,383,97,372,98,364,100,354,102,345,104,337,105,328,105,320,105,312,103,304,103,296,104,288,106,279,109,271,110,263,111,255,112,247,113,237,114,229,113,216"
                                    shape="poly">
                            </map>
                        </div>
                        <div class="col-3">
                            <div class="statelist">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="conditions">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
    `;
    // var tpl = '<div class="table-responsive">';
    // tpl += this.renderTemplate('label', {
    //     label: this.labelInfo,
    //     component: this.component,
    //     element: element,
    //     tooltip: this.interpolate(this.component.tooltip || '').replace(/(?:\r\n|\r|\n)/g, '<br />'),
    // });
    // tpl += '<table class="table">';
    // tpl += '<tbody>';
    // for (let i = 0; i < this.component.numRows; i++) {
    //     tpl += '<tr>';
    //     for (let j = 0; j < this.component.numCols; j++) {
    //         tpl += '<td>';
    //         tpl += this.renderTemplate('input', {
    //             input: {
    //                 type: 'input',
    //                 attr: {
    //                     type: 'checkbox'
    //                 },
    //                 id: 'check-' + i + '-' + j
    //             }
    //         });
    //         tpl += '</td>';
    //     }
    //     tpl += '</tr>';
    // }
    // tpl += '</tbody>';
    // tpl += '</table>';
    // tpl += '</div>';
    // return tpl;
    return hm;
};

/**
 * Provide the input element information. Because we are using checkboxes, the change event needs to be 
 * 'click' instead of the default 'change' from the InputComponent.
 * 
 * @return {{type, component, changeEvent, attr}}
 */
HumanMapComponent.prototype.elementInfo = function () {
    const info = InputComponent.prototype.elementInfo.call(this);
    info.changeEvent = 'click';
    return info;
};

/**
 * Tell the renderer how to "get" a value from this component.
 * 
 * @return {Array}
 */
HumanMapComponent.prototype.getValue = function () {

    var value = [];
    if (!this.refs.input || !this.refs.input.length) {
        return value;
    }
    for (let i = 0; i < this.component.numRows; i++) {
        value[i] = [];
        for (let j = 0; j < this.component.numCols; j++) {
            var index = (i * this.component.numCols) + j;
            if (this.refs.input[index]) {
                value[i][j] = !!this.refs.input[index].checked;
            }
        }
    }
    // return value;
    return [document.querySelector('.conditions item.actived').textContent];
};

/**
 * Tell the renderer how to "set" the value of this component.
 * 
 * @param value
 * @return {boolean}
 */
HumanMapComponent.prototype.setValue = function (value) {
    var changed = InputComponent.prototype.updateValue.call(this, value);
    if (!value) {
        return changed;
    }
    for (let i = 0; i < this.component.numRows; i++) {
        if (!value[i]) {
            break;
        }
        for (let j = 0; j < this.component.numCols; j++) {
            if (!value[i][j]) {
                return false;
            }
            let checked = value[i][j] ? 1 : 0;
            var index = (i * this.component.numCols) + j;
            this.refs.input[index].value = checked;
            this.refs.input[index].checked = checked;
        }
    }
    return changed;
};

// Use the table component edit form.
HumanMapComponent.editForm = Formio.Components.components.table.editForm;

// Register the component to the Formio.Components registry.
Formio.Components.addComponent('husmanmap', HumanMapComponent);
