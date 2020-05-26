# sms
This is a school Management Sytem! Project Starts on may 25 2020


# Database design

# Groups  
Developer Student parent Direction Administration economat Teacher Reporter Discipline Pedagoie Publication Economat-ADM Administrateur- System Kinder Prefet-1 Prefet-2 Surveillant 

#### academicperiods
id
name_period
weight
checked
date_start
date_end
is_year 
year
date_created datetime
date_updated datetime 
create_by
update_by

# users
id 
last_name
first_name
gender
blood_group
birthday
id_number
id_student
adresse
phone
email
nif_cin
cities
citizenships
idantifiant
matricule


CREATE TABLE `postulant` (
  `id` int(11) NOT NULL,
  `first_name` varchar(120) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `blood_group` varchar(10) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `cities` int(11) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `citizenship` varchar(128) DEFAULT NULL,
  `health_state` varchar(255) DEFAULT NULL,
  `person_liable` varchar(100) DEFAULT NULL,
  `person_liable_phone` varchar(65) DEFAULT NULL,
  `person_liable_adresse` varchar(255) DEFAULT NULL,
  `person_liable_relation` int(11) DEFAULT NULL,
  `apply_for_level` int(11) NOT NULL,
  `previous_level` int(11) DEFAULT NULL,
  `previous_school` varchar(255) DEFAULT NULL,
  `school_date_entry` date DEFAULT NULL,
  `last_average` double DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `academic_year` int(11) DEFAULT NULL,
  `is_validate` tinyint(1) DEFAULT NULL,
  `is_online` tinyint(1) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `create_by` varchar(45) DEFAULT NULL,
  `update_by` varchar(45) DEFAULT NULL



#### accounting
old_balance
expenses
incomes 
new_balance
month
academic year

#### Some actions from the school 
# Users (Create, Update, Delete, view)
Lister les utilisateurs
Creation d\'utilisateur
Mise a jour d\'un utilisateur
Suppression d\'un utilisateur
Change password
Update Users
disable Users 
List of inactifs Users
List Students
Room Affectetion---Affecter les eleves dans une salle de classes


# Perspms
List Archive (Liste des anciens professeurs)
List des anciens employee
Liste des anciens eleves

# Report Card
Create report for class
Affichage de buletin par eleve


# Course
# appreciations_grid
  `id` int(11) NOT NULL,
  `section` int(11) NOT NULL,
  `start_range` float NOT NULL,
  `end_range` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `short_text` varchar(5) NOT NULL,
  `academic_year` int(11) NOT NULL,
  `create_by` varchar(64) DEFAULT NULL,
  `update_by` varchar(64) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL



# Balance
id 
student
balance
date_created

# billings
id
student
fee_period
amount to pay
amount_pay
balance
reservation_id
academic_year
date_pay
payent_method
commentss
date_created
date_updated
created_by
updated_by

# bareme
id
min_value
max_value
percentage
compteur
old_new
date_created
created-by

# courses
id
subject
teacher
room
academic_period
weight
homework_weight
reference_id
date_created
date_updated
created_by

# Decision Finale
  `id` bigint(20) NOT NULL,
  `student` int(11) NOT NULL,
  `academic_year` int(11) NOT NULL,
  `general_average` float DEFAULT NULL,
  `mention` varchar(45) DEFAULT NULL,
  `report_mention` int(11) DEFAULT NULL,
  `comments` varchar(128) DEFAULT NULL,
  `is_move_to_next_year` tinyint(1) DEFAULT NULL,
  `current_level` int(11) DEFAULT NULL,
  `next_level` int(11) DEFAULT NULL,
  `checked` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0: poko pase migrasyon; 1: pase migrasyon deja',
  `create_by` varchar(100) DEFAULT NULL,
  `update_by` varchar(100) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,

  # departments
  id
  departement_name
  date_created
  Date_updated
  create_by

  # Devoirs
    `id` int(11) NOT NULL,
  `student` int(11) NOT NULL,
  `course` int(11) NOT NULL,
  `academic_period` int(11) NOT NULL,
  `grade_value` float DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `create_by` varchar(45) DEFAULT NULL,
  `update_by` varchar(45) DEFAULT NULL

  # employee_info
employee_name 
hire_date
country_of_birth
university_or_school
field_study
qualifications
job_status
permis_enseignant
leaving_date
# Homework 

  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `course` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `limit_date_submission` date NOT NULL,
  `given_date` date NOT NULL,
  `attachment_ref` varchar(255) NOT NULL,
  `academic_year` int(11) NOT NULL

  # ID Cards
  id
  persons_id
  prenom
  nom
  sex
  image
  date_ajuout
  date-print


  `infraction_type` (`id`, `name`, `description`, `deductible_value`) VALUES
(1, 'Tapage en classe', '', 20),
(2, 'Bagarre', 'Quand deux élèves se battent dans la salle de classe ou sur la cour de l\'école', 30),
(3, 'Sommeil en classe', '', 5),
(4, 'Absences répétées', '', 10),
(5, 'Leçons non sues', '', 10),
(6, 'Bavardage', '', 5),
(7, 'Tricherie', '', 100),
(8, 'Vandalisme', '', 30),
(9, 'Vol', '', 100),
(10, 'Port d\'arme', '', 50),
(12, 'Refus d\'obéir, effronterie', '', 15),
(13, 'Usage de mots grivois', '', 50),
(14, 'Manque de respect envers un membre du personnel', '', 20),
(15, 'Falsification d\'informations ', '', 20),
(16, 'Faire du bruit excessif a l’école', '', 10),
(17, 'Gaspillage de ressources', '', 10),
(18, 'Devoirs non faits', '', 15),
(25, 'Salir la cour de l\'école', '', 10),
(26, 'Salir la salle de classe', '', 10),
(27, 'Boire ou manger en salle de classe', '', 5),
(28, 'Utilisation du téléphone portable sans autorisation', '', 15),
(32, 'Cris ou autres bruits incongrus dans l\'enceinte de l\'école', '', 5),
(36, 'Absence non motivée', '', 5),
(37, 'Communication excessive en salle d\'examens', 'Communiquer avec un autre camarade pendant l\'examen sans interruption', 20),
(38, 'Retard non motivé', 'Retard sans explication', 10),
(39, 'Consommation, distribution ou vente de produits illicites', 'Fabrication, consommation, distribution ou vente de drogues de toutes sortes ou de boissons alcoolisées', 20),
(40, 'Comportement violent, agressif', 'Violence verbale ou physique', 25),
(41, 'Retards répétés', '', 10),
(42, 'Ecole buissonnière', 'l\'élève ne se présente pas à l\'école', 15),
(43, 'Déplacement sans laissez-passer', 'Circulation non autorisée sur les galeries et sur la cour de l\'école', 5),
(44, 'Manque de respect envers un camarade', '', 10),
(45, 'Regard autain', '', 10),
(46, 'Injures', '', 20);


# job_status
Contractuel
Temps Plein
Consultant
Temps Partiel

# Level name 
Première Année
Deuxième Année
Troisième Année
Quatrième Année
Cinquième Année
Sixième Année
Septième Année
Huitième Année
Neuvième Année
Secondaire I
Secondaire 2
Secondaire 3
Secondaire 4


# Modules
Configurations
Users
Reports
Billings
Academic
Guest
portal
Discipline
IdCars



CREATE TABLE `payroll` (
  `id` int(11) NOT NULL,
  `id_payroll_set` int(11) NOT NULL,
  `id_payroll_set2` int(11) DEFAULT NULL COMMENT 'recois l''id_payrollsetting professeur s''il est a la fois employe et professeur',
  `payroll_month` int(3) NOT NULL,
  `payroll_date` date NOT NULL,
  `missing_hour` int(11) NOT NULL,
  `taxe` double NOT NULL,
  `gross_salary` double NOT NULL,
  `percentage` double DEFAULT NULL,
  `net_salary` double NOT NULL,
  `payment_date` date NOT NULL,
  `cash_check` varchar(45) NOT NULL,
  `date_created` date NOT NULL,
  `date_updated` date NOT NULL,
  `created_by` varchar(65) NOT NULL,
  `updated_by` varchar(65) NOT NULL


CREATE TABLE `payroll_settings` (
  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `amount` double NOT NULL,
  `an_hour` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0:no, 1:yes',
  `number_of_hour` int(11) NOT NULL,
  `academic_year` int(11) NOT NULL,
  `as` int(2) DEFAULT '0' COMMENT '0: employee; 1: teacher',
  `old_new` tinyint(2) NOT NULL DEFAULT '1' COMMENT '0: old setting; 1: new setting',
  `date_created` date NOT NULL,
  `date_updated` date NOT NULL,
  `created_by` varchar(65) NOT NULL,
  `updated_by` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




# room
room_name
id
level

# schedules
id
course
time_start
time_end
date_created
date_updated
created_by
updated-by


# data Dump


INSERT INTO `subjects` (`id`, `subject_name`, `short_subject_name`, `is_subject_parent`, `subject_parent`, `date_created`, `date_updated`, `create_by`, `update_by`) VALUES
(1, 'Espagnol', 'ESPA', 0, 117, '2014-10-04 01:10:44', '2019-08-05 00:00:00', NULL, NULL),
(2, 'Anglais', 'ANGL', 0, 117, '2014-10-04 01:10:47', '2019-08-05 00:00:00', NULL, NULL),
(6, 'Créole', 'CREO', 0, 117, '2014-10-11 11:10:20', '2019-08-05 00:00:00', NULL, NULL),
(8, 'Biologie', 'BIOL', 0, 59, '2014-10-11 11:10:56', '2019-08-05 00:00:00', NULL, NULL),
(10, 'Sciences sociales', 'SCSO', 1, NULL, '2014-10-11 11:10:06', '2016-09-21 00:00:00', NULL, NULL),
(13, 'Savoir-vivre', 'SAVO', 0, 69, '2014-10-11 11:10:41', '2016-09-09 00:00:00', NULL, NULL),
(15, 'Chimie', 'CHIM', 0, 63, '2014-10-11 11:10:59', '2016-11-07 00:00:00', NULL, NULL),
(23, 'Physique', 'PHYS', 0, 63, '2014-10-16 05:10:30', '2016-09-09 00:00:00', NULL, NULL),
(40, 'Catéchèse', 'CAT', 0, 69, '2014-11-03 07:11:55', '2016-09-09 00:00:00', NULL, NULL),
(59, 'Sciences expérimentales  ', 'SCEX', 1, NULL, '2014-11-03 08:11:11', '2019-08-05 00:00:00', NULL, NULL),
(63, 'Sciences', 'SCIE', 1, NULL, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(64, 'Mathématiques', 'MATH', 1, NULL, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(66, 'Langues', 'LANG', 1, NULL, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(67, 'Littérature', 'LITT', 1, NULL, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(68, 'Communication française', 'COFR', 1, NULL, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(69, 'Culture et Religion', 'CUER', 1, NULL, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(70, 'Arts Plastiques', 'ARPL', 0, 69, '2016-09-09 13:09:11', NULL, '_jacques1003', NULL),
(71, 'Education physique et sport', 'EPS', 0, 69, '2016-09-09 13:09:33', '2019-08-05 00:00:00', '_jacques1003', NULL),
(72, 'Grammaire', 'GRAM', 0, 114, '2016-09-09 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(73, 'Communication écrite', 'COEC', 0, 114, '2016-09-09 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(74, 'Orthographe / Vocabulaire', 'ORVO', 0, 114, '2016-09-09 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(75, 'Pièces classiques', 'PICL', 0, 114, '2016-09-09 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(76, 'Texte et vocabulaire', 'TEEV', 0, 68, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(77, 'Algèbre ', 'ALG', 0, 64, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(78, 'Arithmétique', 'ARIT', 0, 64, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(79, 'Géométrie', 'GEO', 0, 64, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(80, 'Informatique', 'INFO', 0, 91, '2016-09-09 00:00:00', '2016-09-29 00:00:00', NULL, NULL),
(82, 'Physique électrique', 'PHE', 0, 63, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(83, 'Physique optique', 'PHO', 0, 63, '2016-09-09 00:00:00', '2018-10-25 00:00:00', NULL, NULL),
(84, 'Latin', 'LATI', 0, 66, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(86, 'Musique', 'MUSI', 0, 117, '2016-09-09 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(87, 'Conjugaison', 'CONJ', 0, 68, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(88, 'Français 1', 'FR1', 0, 67, '2016-09-09 00:00:00', '2018-09-28 00:00:00', NULL, NULL),
(89, 'Français 2', 'FR2', 0, 67, '2016-09-09 00:00:00', '2018-09-28 00:00:00', NULL, NULL),
(90, 'Méthodologie', 'MET', 0, 67, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(91, 'Technologie', 'TECH', 1, NULL, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(92, 'Volet professionnel', 'VOPR', 0, 91, '2016-09-09 00:00:00', '2016-12-21 00:00:00', NULL, NULL),
(93, 'Algèbre et Géométrie', 'ALEG', 0, 64, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(94, 'Analyse', 'ANAL', 0, 64, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(95, 'Philosophie', 'PHIL', 0, 67, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(96, 'Physiologie', 'PHYS', 0, 63, '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(97, 'Alg/Géom/Proba', 'ALG/', 0, 64, '2016-09-09 00:00:00', '2016-10-21 00:00:00', NULL, NULL),
(98, 'Education à la citoyenneté', 'EDCI', 0, 10, '2016-09-21 13:09:10', '2017-10-05 00:00:00', '_developer_', NULL),
(99, 'Histoire ', 'HIS', 0, 10, '2016-09-29 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(100, 'Histoire de l\'art', 'HIDL', 0, 69, '2016-09-29 00:00:00', '2016-09-29 00:00:00', NULL, NULL),
(101, 'Initiation à la lecture', 'INLE', 0, 68, '2016-09-29 00:00:00', '2017-10-05 00:00:00', NULL, NULL),
(102, 'Texte', 'TEXT', 0, 68, '2016-10-14 00:00:00', '2016-10-14 00:00:00', NULL, NULL),
(103, 'Vocabulaire', 'VOCA', 0, 68, '2016-10-14 00:00:00', '2016-10-14 00:00:00', NULL, NULL),
(104, 'Géologie', 'GEOL', 0, 59, '2016-10-18 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(105, 'Economie', 'ECON', 0, 63, '2016-10-21 00:00:00', '2016-10-21 00:00:00', NULL, NULL),
(106, 'Psychologie', 'PSYC', 0, 67, '2016-10-21 00:00:00', '2018-09-05 00:00:00', NULL, NULL),
(107, 'Analyse/Suite', 'ANAL', 0, 64, '2016-10-21 00:00:00', '2016-10-21 00:00:00', NULL, NULL),
(108, 'Probabilité', 'PROB', 0, 64, '2016-10-21 16:10:56', NULL, '_jacques1003', NULL),
(109, 'Morale', 'MORA', 0, 69, '2016-10-24 00:00:00', '2016-10-24 00:00:00', NULL, NULL),
(110, 'Trigonométrie', 'TRIG', 0, 64, '2016-10-24 00:00:00', '2016-10-24 00:00:00', NULL, NULL),
(111, 'Suites', 'SUIT', 0, 64, '2016-10-25 00:00:00', '2016-10-25 00:00:00', NULL, NULL),
(112, 'Statistique et géométrie', 'STGE', 0, 64, '2017-10-05 00:00:00', '2017-10-05 00:00:00', NULL, NULL),
(113, 'Art et musique ', 'ARMU', 0, 69, '2018-09-05 00:00:00', '2018-09-05 00:00:00', NULL, NULL),
(114, 'Français ', 'FR', 1, NULL, '2018-09-28 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(115, 'Litterature Haitienne', 'LH', 1, NULL, '2018-10-04 00:00:00', '2019-09-05 00:00:00', NULL, NULL),
(116, 'Littérature française', 'LF', 0, 68, '2018-10-04 00:00:00', '2019-09-05 00:00:00', NULL, NULL),
(117, 'Langues / Arts', 'LAA', 1, NULL, '2019-08-05 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(118, 'Art Oratoire', 'ARO', 0, 114, '2019-08-05 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(119, 'Lecture Expliquée', 'LEEX', 0, 114, '2019-08-05 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(120, 'Géographie', 'GEOG', 0, 10, '2019-08-05 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(121, 'Cultiure Générale', 'CUlGE', 0, 10, '2019-08-05 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(122, 'Sciences Physiques', 'SCIPH', 0, 59, '2019-08-05 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(123, 'Math Financière et Stat.', 'MAFS', 0, 64, '2019-08-05 00:00:00', '2019-08-05 00:00:00', NULL, NULL),
(124, 'Religion', 'REL', 0, NULL, '2019-09-05 00:00:00', '2019-09-05 00:00:00', NULL, NULL),
(125, 'Sciences Appliquées', 'SA', 1, NULL, '2019-09-05 00:00:00', '2019-09-05 00:00:00', NULL, NULL),
(126, 'Electronique', 'EL', 0, 125, '2019-09-05 15:09:57', NULL, 'admin', NULL),
(127, 'Mécanique', 'MEC', 0, 125, '2019-09-05 15:09:57', NULL, 'admin', NULL);





# data Dump

INSERT INTO `titles` (`id`, `title_name`, `date_created`, `date_updated`, `create_by`, `update_by`) VALUES
(1, 'Secrétaire de scolarité', '2014-10-04 00:00:00', '2017-08-29 00:00:00', NULL, NULL),
(4, 'Préfet des études', '2014-10-04 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(6, 'Econome', '2014-10-04 00:00:00', '2014-10-04 00:00:00', NULL, NULL),
(9, 'Technicien en informatique', '2015-08-20 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(10, 'Personnel de service', '2015-08-20 00:00:00', '2016-11-17 00:00:00', NULL, NULL),
(11, 'Agent de securité', '2016-08-23 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(15, 'Chauffeur', '2016-08-23 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(16, 'Responsable vie scolaire', '2016-08-23 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(17, 'Infirmière', '2016-08-23 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(18, 'Administrateur de réseaux', '2016-08-23 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(19, 'Responsable Informatique', '2016-08-23 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(23, 'Responsable bibliothèque', '2016-08-23 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(24, 'Imprimeur', '2016-08-23 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(25, 'Surveillant Général', '2016-08-23 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(26, 'Secrétaire de l\'économat', '2016-08-23 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(28, 'Secrétaire de direction', '2016-08-23 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(29, 'Secrétaire aux archives', '2016-08-23 00:00:00', '2016-08-23 00:00:00', NULL, NULL),
(31, 'Directeur Général', '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(32, 'Assistant-Directeur', '2016-09-09 00:00:00', '2016-09-09 00:00:00', NULL, NULL),
(33, 'Conseiller principal d\'éducation ', '2017-08-29 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(34, 'Conseiller d\'éducation', '2017-08-29 00:00:00', '2017-08-29 00:00:00', NULL, NULL),
(35, 'Conseiller d\'orientation psychologique', '2017-08-29 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(38, 'Entraineur de sport ', '2018-10-03 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(39, 'Responable section pré-scolaire', '2019-08-10 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(40, 'Responsable section fondamentale', '2019-08-10 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(41, 'Responsable section secondaire', '2019-08-10 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(42, 'Conseiller d\'orientation professionnelle', '2019-08-10 00:00:00', '2019-08-10 00:00:00', NULL, NULL),
(43, 'Responsable laboratoire', '2019-08-10 00:00:00', '2019-08-10 00:00:00', NULL, NULL);
