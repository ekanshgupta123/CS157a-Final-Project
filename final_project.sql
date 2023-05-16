-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (arm64)
--
-- Host: localhost    Database: final_project
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Applicant`
--

DROP TABLE IF EXISTS `Applicant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Applicant` (
  `ApplicantID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `School` varchar(255) NOT NULL,
  `GradYear` int NOT NULL,
  `Resume` varbinary(5000) NOT NULL,
  `ExperienceID` int NOT NULL,
  `LocationID` int NOT NULL,
  `Username` varchar(255) NOT NULL,
  PRIMARY KEY (`ApplicantID`),
  UNIQUE KEY `Username` (`Username`),
  KEY `ExperienceID` (`ExperienceID`),
  KEY `LocationID` (`LocationID`),
  CONSTRAINT `applicant_ibfk_1` FOREIGN KEY (`ExperienceID`) REFERENCES `MostRecentExperience` (`ExperienceID`),
  CONSTRAINT `applicant_ibfk_2` FOREIGN KEY (`LocationID`) REFERENCES `Location` (`LocationID`),
  CONSTRAINT `applicant_ibfk_3` FOREIGN KEY (`Username`) REFERENCES `ApplicantAccount` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Applicant`
--

LOCK TABLES `Applicant` WRITE;
/*!40000 ALTER TABLE `Applicant` DISABLE KEYS */;
/*!40000 ALTER TABLE `Applicant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ApplicantAccount`
--

DROP TABLE IF EXISTS `ApplicantAccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ApplicantAccount` (
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`Username`),
  UNIQUE KEY `Username` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ApplicantAccount`
--

LOCK TABLES `ApplicantAccount` WRITE;
/*!40000 ALTER TABLE `ApplicantAccount` DISABLE KEYS */;
/*!40000 ALTER TABLE `ApplicantAccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ApplicantApplication`
--

DROP TABLE IF EXISTS `ApplicantApplication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ApplicantApplication` (
  `ApplicationID` int NOT NULL,
  `ApplicantID` int NOT NULL,
  PRIMARY KEY (`ApplicationID`,`ApplicantID`),
  KEY `ApplicantID` (`ApplicantID`),
  CONSTRAINT `applicantapplication_ibfk_1` FOREIGN KEY (`ApplicationID`) REFERENCES `Application` (`ApplicationID`),
  CONSTRAINT `applicantapplication_ibfk_2` FOREIGN KEY (`ApplicantID`) REFERENCES `Applicant` (`ApplicantID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ApplicantApplication`
--

LOCK TABLES `ApplicantApplication` WRITE;
/*!40000 ALTER TABLE `ApplicantApplication` DISABLE KEYS */;
/*!40000 ALTER TABLE `ApplicantApplication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ApplicantSkill`
--

DROP TABLE IF EXISTS `ApplicantSkill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ApplicantSkill` (
  `ApplicantID` int NOT NULL,
  `Skill` varchar(30) NOT NULL,
  PRIMARY KEY (`ApplicantID`,`Skill`),
  CONSTRAINT `applicantskill_ibfk_1` FOREIGN KEY (`ApplicantID`) REFERENCES `Applicant` (`ApplicantID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ApplicantSkill`
--

LOCK TABLES `ApplicantSkill` WRITE;
/*!40000 ALTER TABLE `ApplicantSkill` DISABLE KEYS */;
/*!40000 ALTER TABLE `ApplicantSkill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Application`
--

DROP TABLE IF EXISTS `Application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Application` (
  `ApplicationID` int NOT NULL AUTO_INCREMENT,
  `RoleID` int NOT NULL,
  `RecruiterID` int NOT NULL,
  PRIMARY KEY (`ApplicationID`),
  KEY `RoleID` (`RoleID`),
  KEY `RecruiterID` (`RecruiterID`),
  CONSTRAINT `application_ibfk_1` FOREIGN KEY (`RoleID`) REFERENCES `Role` (`RoleID`),
  CONSTRAINT `application_ibfk_2` FOREIGN KEY (`RecruiterID`) REFERENCES `Recruiter` (`RecruiterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Application`
--

LOCK TABLES `Application` WRITE;
/*!40000 ALTER TABLE `Application` DISABLE KEYS */;
/*!40000 ALTER TABLE `Application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Location`
--

DROP TABLE IF EXISTS `Location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Location` (
  `LocationID` int NOT NULL AUTO_INCREMENT,
  `Address` varchar(255) NOT NULL,
  `City` varchar(100) NOT NULL,
  `State` varchar(20) NOT NULL,
  PRIMARY KEY (`LocationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
/*!40000 ALTER TABLE `Location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MostRecentExperience`
--

DROP TABLE IF EXISTS `MostRecentExperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MostRecentExperience` (
  `ExperienceID` int NOT NULL AUTO_INCREMENT,
  `Company` varchar(50) DEFAULT NULL,
  `Role` varchar(50) DEFAULT NULL,
  `Description` varchar(3000) DEFAULT NULL,
  `StartDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  PRIMARY KEY (`ExperienceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MostRecentExperience`
--

LOCK TABLES `MostRecentExperience` WRITE;
/*!40000 ALTER TABLE `MostRecentExperience` DISABLE KEYS */;
/*!40000 ALTER TABLE `MostRecentExperience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Recruiter`
--

DROP TABLE IF EXISTS `Recruiter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Recruiter` (
  `RecruiterID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `LocationID` int NOT NULL,
  `Username` varchar(255) NOT NULL,
  PRIMARY KEY (`RecruiterID`),
  UNIQUE KEY `Username` (`Username`),
  KEY `LocationID` (`LocationID`),
  CONSTRAINT `recruiter_ibfk_1` FOREIGN KEY (`LocationID`) REFERENCES `Location` (`LocationID`),
  CONSTRAINT `recruiter_ibfk_2` FOREIGN KEY (`Username`) REFERENCES `RecruiterAccount` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recruiter`
--

LOCK TABLES `Recruiter` WRITE;
/*!40000 ALTER TABLE `Recruiter` DISABLE KEYS */;
/*!40000 ALTER TABLE `Recruiter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RecruiterAccount`
--

DROP TABLE IF EXISTS `RecruiterAccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RecruiterAccount` (
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`Username`),
  UNIQUE KEY `Username` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RecruiterAccount`
--

LOCK TABLES `RecruiterAccount` WRITE;
/*!40000 ALTER TABLE `RecruiterAccount` DISABLE KEYS */;
/*!40000 ALTER TABLE `RecruiterAccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RecruiterApplication`
--

DROP TABLE IF EXISTS `RecruiterApplication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RecruiterApplication` (
  `RecruiterID` int NOT NULL,
  `ApplicationID` int NOT NULL,
  PRIMARY KEY (`RecruiterID`,`ApplicationID`),
  KEY `ApplicationID` (`ApplicationID`),
  CONSTRAINT `recruiterapplication_ibfk_1` FOREIGN KEY (`RecruiterID`) REFERENCES `Recruiter` (`RecruiterID`),
  CONSTRAINT `recruiterapplication_ibfk_2` FOREIGN KEY (`ApplicationID`) REFERENCES `Application` (`ApplicationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RecruiterApplication`
--

LOCK TABLES `RecruiterApplication` WRITE;
/*!40000 ALTER TABLE `RecruiterApplication` DISABLE KEYS */;
/*!40000 ALTER TABLE `RecruiterApplication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Role` (
  `RoleID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(50) NOT NULL,
  `Description` varchar(3000) NOT NULL,
  `StartDate` date NOT NULL,
  `LocationID` int NOT NULL,
  PRIMARY KEY (`RoleID`),
  KEY `LocationID` (`LocationID`),
  CONSTRAINT `role_ibfk_1` FOREIGN KEY (`LocationID`) REFERENCES `Location` (`LocationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RoleSkill`
--

DROP TABLE IF EXISTS `RoleSkill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RoleSkill` (
  `RoleID` int NOT NULL,
  `Skill` varchar(30) NOT NULL,
  PRIMARY KEY (`RoleID`,`Skill`),
  CONSTRAINT `roleskill_ibfk_1` FOREIGN KEY (`RoleID`) REFERENCES `Role` (`RoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RoleSkill`
--

LOCK TABLES `RoleSkill` WRITE;
/*!40000 ALTER TABLE `RoleSkill` DISABLE KEYS */;
/*!40000 ALTER TABLE `RoleSkill` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-15 21:19:40
