-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-10-2022 a las 20:32:42
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `videojuegosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_car` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_car`) VALUES
(1),
(3),
(4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_juegos`
--

CREATE TABLE `carrito_juegos` (
  `id_car` int(11) NOT NULL,
  `j_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `c_id` int(11) NOT NULL,
  `nombre` varchar(40) DEFAULT NULL,
  `slug` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`c_id`, `nombre`, `slug`) VALUES
(1, 'Racing', 'racing'),
(2, 'Shooter', 'shooter'),
(3, 'Adventure', 'adventure'),
(4, 'Family', 'family'),
(5, 'Sports', 'sports'),
(6, 'Strategy', 'strategy'),
(7, 'RPG', 'role-playing-games-rpg'),
(8, 'Action', 'action'),
(9, 'Arcade', 'arcade'),
(10, 'Card', 'card'),
(11, 'Simulation', 'simulation'),
(12, 'Puzzle', 'puzzle'),
(13, 'Fighting', 'fighting'),
(14, 'Board Games', 'board-games'),
(15, 'Educational', 'educational'),
(16, 'Casual', 'casual'),
(17, 'Indie', 'indie'),
(18, 'Platformer', 'platformer'),
(19, 'Massively Multiplayer', 'massively-multiplayer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categ_juegos`
--

CREATE TABLE `categ_juegos` (
  `j_id` int(11) NOT NULL,
  `c_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categ_juegos`
--

INSERT INTO `categ_juegos` (`j_id`, `c_id`) VALUES
(24, 1),
(24, 19),
(2, 8),
(2, 7),
(2, 3),
(9, 7),
(9, 18),
(9, 6),
(13, 1),
(2, 17),
(3, 6),
(5, 12),
(4, 15),
(7, 14),
(6, 7),
(8, 6),
(9, 5),
(18, 4),
(15, 4),
(16, 18),
(10, 9),
(14, 14),
(12, 18),
(11, 7),
(17, 11),
(13, 17),
(19, 11),
(20, 16),
(21, 1),
(22, 3),
(23, 18),
(24, 5),
(25, 15),
(26, 11),
(27, 7),
(28, 4),
(29, 10),
(30, 5),
(31, 9),
(32, 19),
(33, 9),
(34, 19),
(35, 15),
(36, 16),
(37, 11),
(38, 15),
(39, 6),
(40, 9),
(41, 11),
(42, 17),
(43, 4),
(44, 13),
(45, 13),
(46, 13),
(47, 11),
(48, 13),
(49, 14),
(50, 19),
(51, 18),
(52, 8),
(53, 5),
(54, 16),
(55, 2),
(56, 6),
(57, 10),
(58, 13),
(59, 12),
(60, 8),
(61, 18),
(62, 2),
(63, 3),
(64, 1),
(65, 5),
(66, 11),
(67, 3),
(68, 2),
(69, 8),
(70, 1),
(71, 18),
(72, 1),
(74, 18),
(75, 18),
(73, 18),
(76, 10),
(77, 3),
(78, 19),
(79, 8),
(80, 16),
(1, 19),
(1, 2),
(2, 7),
(3, 9),
(4, 7),
(5, 13),
(6, 3),
(7, 18),
(8, 11),
(9, 2),
(10, 6),
(20, 16),
(13, 8),
(18, 10),
(17, 16),
(14, 6),
(11, 7),
(15, 7),
(19, 2),
(16, 17),
(12, 17),
(21, 12),
(22, 3),
(23, 4),
(24, 4),
(25, 9),
(26, 6),
(27, 17),
(28, 5),
(29, 13),
(30, 8),
(31, 2),
(32, 10),
(33, 15),
(34, 7),
(35, 9),
(36, 7),
(37, 12),
(38, 17),
(39, 15),
(40, 17),
(41, 13),
(42, 13),
(43, 6),
(44, 14),
(45, 1),
(46, 2),
(47, 1),
(48, 15),
(49, 8),
(50, 19),
(51, 5),
(52, 7),
(53, 12),
(54, 17),
(55, 18),
(56, 6),
(59, 19),
(58, 13),
(61, 3),
(57, 16),
(60, 4),
(62, 9),
(63, 15),
(64, 2),
(65, 9),
(66, 18),
(67, 16),
(68, 17),
(69, 16),
(70, 12),
(71, 5),
(72, 4),
(73, 18),
(74, 17),
(75, 15),
(76, 8),
(77, 19),
(78, 17),
(79, 5),
(80, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `j_id` int(11) NOT NULL,
  `nombre` varchar(80) DEFAULT NULL,
  `slug` varchar(80) DEFAULT NULL,
  `precio` int(10) DEFAULT NULL,
  `imagen` varchar(300) DEFAULT NULL,
  `rating` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`j_id`, `nombre`, `slug`, `precio`, `imagen`, `rating`) VALUES
(1, 'Grand Theft Auto V', 'grand-theft-auto-v', 233284, 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg', '4.47'),
(2, 'The Witcher 3: Wild Hunt', 'the-witcher-3-wild-hunt', 177242, 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg', '4.67'),
(3, 'Portal 2', 'portal-2', 325498, 'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg', '4.61'),
(4, 'Tomb Raider (2013)', 'tomb-raider', 134144, 'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg', '4.06'),
(5, 'Borderlands 2', 'borderlands-2', 141279, 'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg', '4.03'),
(6, 'BioShock', 'bioshock', 151060, 'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg', '4.37'),
(7, 'The Elder Scrolls V: Skyrim', 'the-elder-scrolls-v-skyrim', 336575, 'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg', '4.42'),
(8, 'Portal', 'portal', 136109, 'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg', '4.51'),
(9, 'Red Dead Redemption 2', 'red-dead-redemption-2', 199659, 'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg', '4.59'),
(10, 'Life is Strange', 'life-is-strange-episode-1-2', 471567, 'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg', '4.11'),
(11, 'Left 4 Dead 2', 'left-4-dead-2', 153643, 'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg', '4.08'),
(12, 'Half-Life 2', 'half-life-2', 88406, 'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg', '4.5'),
(13, 'Counter-Strike: Global Offensive', 'counter-strike-global-offensive', 488000, 'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg', '3.57'),
(14, 'BioShock Infinite', 'bioshock-infinite', 67177, 'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg', '4.39'),
(15, 'Limbo', 'limbo', 232252, 'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg', '4.16'),
(16, 'DOOM (2016)', 'doom', 39253, 'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg', '4.39'),
(17, 'Fallout 4', 'fallout-4', 298998, 'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg', '3.8'),
(18, 'Destiny 2', 'destiny-2', 181327, 'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg', '3.56'),
(19, 'God of War', 'god-of-war-2', 69326, 'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg', '4.59'),
(20, 'Team Fortress 2', 'team-fortress-2', 182555, 'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg', '3.66'),
(21, 'PAYDAY 2', 'payday-2', 370918, 'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg', '3.5'),
(22, 'Horizon Zero Dawn', 'horizon-zero-dawn', 230643, 'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg', '4.33'),
(23, 'Grand Theft Auto IV', 'grand-theft-auto-iv', 199177, 'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg', '4.25'),
(24, 'Rocket League', 'rocket-league', 148839, 'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg', '3.97'),
(25, 'Dota 2', 'dota-2', 76618, 'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg', '3.05'),
(26, 'Metro 2033', 'metro-2033', 292618, 'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg', '3.93'),
(27, 'Terraria', 'terraria', 435706, 'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg', '4.04'),
(28, 'Warframe', 'warframe', 498622, 'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg', '3.42'),
(29, 'Metal Gear Solid V: The Phantom Pain', 'metal-gear-solid-v-the-phantom-pain', 437888, 'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg', '4.16'),
(30, 'Rise of the Tomb Raider', 'rise-of-the-tomb-raider', 23762, 'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg', '4.03'),
(31, 'Cyberpunk 2077', 'cyberpunk-2077', 64409, 'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg', '4.08'),
(32, 'The Walking Dead: Season 1', 'the-walking-dead', 377717, 'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg', '4.32'),
(33, 'Batman: Arkham Knight', 'batman-arkham-knight', 74762, 'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg', '4.22'),
(34, 'The Witcher 2: Assassins of Kings Enhanced Edition', 'the-witcher-2-assassins-of-kings-enhanced-edition', 52722, 'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg', '4.17'),
(35, 'Middle-earth: Shadow of Mordor', 'shadow-of-mordor', 37020, 'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg', '3.89'),
(36, 'Half-Life 2: Lost Coast', 'half-life-2-lost-coast', 400593, 'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg', '3.45'),
(37, 'Grand Theft Auto: San Andreas', 'grand-theft-auto-san-andreas', 229406, 'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg', '4.51'),
(38, 'The Witcher: Enhanced Edition Director\'s Cut', 'the-witcher-enhanced-edition-directors-cut', 25132, 'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg', '4.06'),
(39, 'BioShock 2', 'bioshock-2', 160013, 'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg', '4.06'),
(40, 'Hitman', 'hitman', 357982, 'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg', '3.92'),
(41, 'Half-Life 2: Episode One', 'half-life-2-episode-one', 301035, 'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg', '4.39'),
(42, 'Mirror\'s Edge', 'mirrors-edge', 375414, 'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg', '4.07'),
(43, 'Half-Life 2: Episode Two', 'half-life-2-episode-two', 431501, 'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg', '4.45'),
(44, 'Hotline Miami', 'hotline-miami', 385458, 'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg', '4.38'),
(45, 'Dark Souls III', 'dark-souls-iii', 486516, 'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg', '4.41'),
(46, 'Deus Ex: Mankind Divided', 'deus-ex-mankind-divided', 327583, 'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg', '3.96'),
(47, 'Hollow Knight', 'hollow-knight', 432247, 'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg', '4.41'),
(48, 'Apex Legends', 'apex-legends', 298405, 'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg', '3.67'),
(49, 'Outlast', 'outlast', 33272, 'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg', '3.7'),
(50, 'Spec Ops: The Line', 'spec-ops-the-line', 388961, 'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg', '4.08'),
(51, 'Little Nightmares', 'little-nightmares', 32293, 'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg', '4.06'),
(52, 'Marvel\'s Spider-Man', 'marvels-spider-man', 401399, 'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg', '4.47'),
(53, 'Far Cry 3', 'far-cry-3', 338470, 'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg', '4.23'),
(54, 'Amnesia: The Dark Descent', 'amnesia-the-dark-descent', 122565, 'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg', '3.65'),
(55, 'BioShock Remastered', 'bioshock-remastered', 301800, 'https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg', '4.24'),
(56, 'Alan Wake', 'alan-wake', 448166, 'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg', '4.12'),
(57, 'Saints Row: The Third', 'saints-row-the-third', 481570, 'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg', '3.94'),
(58, 'Uncharted 4: A Thief’s End', 'uncharted-4-a-thiefs-end', 311471, 'https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg', '4.51'),
(59, 'Half-Life 2: Deathmatch', 'half-life-2-deathmatch', 9360, 'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg', '3.27'),
(60, 'Wolfenstein: The New Order', 'wolfenstein-the-new-order', 331987, 'https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg', '4.19'),
(61, 'Borderlands', 'borderlands', 394467, 'https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg', '3.84'),
(62, 'L.A. Noire', 'la-noire', 336452, 'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg', '4.16'),
(63, 'Half-Life', 'half-life', 279983, 'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg', '4.4'),
(64, 'Detroit: Become Human', 'detroit-become-human', 497712, 'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg', '4.29'),
(65, 'Super Meat Boy', 'super-meat-boy', 262714, 'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg', '3.97'),
(66, 'Prey', 'prey', 156898, 'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg', '4.28'),
(67, 'Injustice: Gods Among Us Ultimate Edition', 'injustice-gods-among-us-ultimate-edition', 3793, 'https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg', '3.52'),
(68, 'Path of Exile', 'path-of-exile', 439662, 'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg', '3.65'),
(69, 'Dead Space', 'dead-space', 189232, 'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg', '4.37'),
(70, 'Sid Meier\'s Civilization V', 'civilization-v', 309496, 'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg', '4.28'),
(71, 'The Last Of Us Remastered', 'the-last-of-us-remastered', 331933, 'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg', '4.69'),
(72, 'Mass Effect 2', 'mass-effect-2', 252425, 'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg', '4.48'),
(73, 'For Honor', 'for-honor', 176415, 'https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg', '3.3'),
(74, 'Garry\'s Mod', 'garrys-mod', 15816, 'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg', '3.77'),
(75, 'Assassin’s Creed IV: Black Flag', 'assassins-creed-iv-black-flag', 419836, 'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg', '4.13'),
(76, 'Hitman: Absolution', 'hitman-absolution', 167246, 'https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg', '3.72'),
(77, 'Stardew Valley', 'stardew-valley', 70970, 'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg', '4.4'),
(78, 'Hellblade: Senua\'s Sacrifice', 'hellblade-senuas-sacrifice', 176181, 'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg', '4.27'),
(79, 'PlayerUnknown’s Battlegrounds', 'playerunknowns-battlegrounds', 241025, 'https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg', '3.29'),
(80, 'Fallout: New Vegas', 'fallout-new-vegas', 487995, 'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg', '4.43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plataformas`
--

CREATE TABLE `plataformas` (
  `id_p` int(11) NOT NULL,
  `nombre` varchar(40) DEFAULT NULL,
  `slug` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `plataformas`
--

INSERT INTO `plataformas` (`id_p`, `nombre`, `slug`) VALUES
(1, 'Windows', 'windows'),
(2, 'Linux', 'linux'),
(3, 'Mac', 'mac'),
(4, 'Xbox', 'xbox'),
(5, 'Play Station', 'play-station'),
(6, 'Nintendo', 'nintendo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plat_juegos`
--

CREATE TABLE `plat_juegos` (
  `j_id` int(11) NOT NULL,
  `id_p` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `plat_juegos`
--

INSERT INTO `plat_juegos` (`j_id`, `id_p`) VALUES
(1, 3),
(2, 3),
(3, 5),
(4, 3),
(5, 5),
(6, 4),
(7, 6),
(8, 5),
(9, 1),
(10, 1),
(11, 2),
(12, 1),
(13, 2),
(14, 4),
(15, 1),
(16, 4),
(17, 3),
(18, 1),
(19, 5),
(20, 5),
(21, 4),
(22, 2),
(23, 6),
(24, 1),
(25, 4),
(26, 2),
(27, 2),
(28, 5),
(29, 6),
(30, 5),
(31, 2),
(32, 5),
(33, 3),
(34, 3),
(35, 6),
(36, 5),
(37, 4),
(38, 3),
(39, 3),
(40, 3),
(41, 5),
(42, 1),
(43, 3),
(44, 3),
(45, 2),
(46, 6),
(47, 4),
(48, 4),
(49, 4),
(50, 1),
(51, 2),
(52, 4),
(53, 5),
(54, 6),
(55, 3),
(56, 3),
(57, 1),
(58, 6),
(59, 6),
(60, 6),
(61, 2),
(62, 3),
(63, 5),
(64, 2),
(65, 1),
(66, 1),
(67, 1),
(68, 6),
(69, 3),
(70, 4),
(71, 6),
(72, 2),
(73, 1),
(74, 3),
(75, 1),
(76, 4),
(77, 6),
(78, 5),
(79, 6),
(80, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `user_id` int(11) NOT NULL,
  `usuario` varchar(30) DEFAULT NULL,
  `nombres` varchar(20) DEFAULT NULL,
  `apellidos` varchar(20) DEFAULT NULL,
  `tipo_user` varchar(10) DEFAULT 'cliente',
  `email` varchar(40) DEFAULT NULL,
  `contraseña` varchar(20) DEFAULT NULL,
  `conected` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`user_id`, `usuario`, `nombres`, `apellidos`, `tipo_user`, `email`, `contraseña`, `conected`) VALUES
(1, 'Tito', 'Tito Samuel', 'Mendez Orjuela', 'admin', 'totitron20@gmail.com', '3166112490', 1),
(3, 'Sam', 'Samuel', 'Orjuela', 'cliente', 'titoypapi@hotmail.com', '1234567', 1),
(4, 'pepo', 'Pepito', 'Perez', 'cliente', 'pepito@hotmail.com', '12345678', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD KEY `id_car` (`id_car`);

--
-- Indices de la tabla `carrito_juegos`
--
ALTER TABLE `carrito_juegos`
  ADD KEY `id_car` (`id_car`),
  ADD KEY `j_id` (`j_id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`c_id`);

--
-- Indices de la tabla `categ_juegos`
--
ALTER TABLE `categ_juegos`
  ADD KEY `j_id` (`j_id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`j_id`);

--
-- Indices de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id_p`);

--
-- Indices de la tabla `plat_juegos`
--
ALTER TABLE `plat_juegos`
  ADD KEY `j_id` (`j_id`),
  ADD KEY `id_p` (`id_p`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `j_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `usuario` (`user_id`);

--
-- Filtros para la tabla `carrito_juegos`
--
ALTER TABLE `carrito_juegos`
  ADD CONSTRAINT `carrito_juegos_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `carrito` (`id_car`),
  ADD CONSTRAINT `carrito_juegos_ibfk_2` FOREIGN KEY (`j_id`) REFERENCES `juegos` (`j_id`);

--
-- Filtros para la tabla `categ_juegos`
--
ALTER TABLE `categ_juegos`
  ADD CONSTRAINT `categ_juegos_ibfk_1` FOREIGN KEY (`j_id`) REFERENCES `juegos` (`j_id`),
  ADD CONSTRAINT `categ_juegos_ibfk_2` FOREIGN KEY (`c_id`) REFERENCES `categorias` (`c_id`);

--
-- Filtros para la tabla `plat_juegos`
--
ALTER TABLE `plat_juegos`
  ADD CONSTRAINT `plat_juegos_ibfk_1` FOREIGN KEY (`j_id`) REFERENCES `juegos` (`j_id`),
  ADD CONSTRAINT `plat_juegos_ibfk_2` FOREIGN KEY (`id_p`) REFERENCES `plataformas` (`id_p`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
