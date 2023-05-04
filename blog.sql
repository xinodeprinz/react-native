-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 04, 2023 at 02:51 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `photo`, `created_at`) VALUES
(6, 'American Woman', 'Here is an American woman at the beach enjoying life.', 'sotqfazmlptlagbdnmoibfnsxdeqtpayvgjohqirxewypcuwyendnxhcxpwaclqooqdyjffepfdlbcqcfpnpiljvthdrvrgwydxm.jpeg', '2023-05-04 12:19:00'),
(7, 'Beautiful man yoo', 'I love this app men', 'hdrokitpqnsycroscfdtxaxugegcxiyuuodxptnvkrbbandtkggpbdqfegigbxldjzqnblshocschswwkgimovoyqzprlujprbmv.jpeg', '2023-04-25 18:35:33'),
(8, 'Hello World', 'Yoo man', 'vcnevrpolbjscuovisxcbthevqomuisinkomklucczazxttujjiqhbzmsyrohpydqkmswuebnhndnkldszwrkbrhqpglguclsslm.jpeg', '2023-05-04 10:42:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
