package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.test.BodySlot;
import com.example.demo.test.BodySlotRepo;
import com.example.demo.test.Defense;
import com.example.demo.test.DefenseRepo;
import com.example.demo.test.Faction;
import com.example.demo.test.FactionRepo;
import com.example.demo.test.Location;
import com.example.demo.test.LocationRepo;
import com.example.demo.test.Range;
import com.example.demo.test.RangeRepo;
import com.example.demo.test.Tag;
import com.example.demo.test.TagRepo;
import com.example.demo.test.User;
import com.example.demo.test.UserRepo;
import com.example.demo.test.Weapon;
import com.example.demo.test.WeaponRepo;
import com.example.demo.test.World;
import com.example.demo.test.WorldRepo;

@RestController
@CrossOrigin
@RequestMapping("/build")
public class BuilderController {
	@Autowired
	TagRepo tagRepo;
	@Autowired
	WorldRepo worldRepo;
	@Autowired
	WeaponRepo weaponRepo;
	@Autowired
	DefenseRepo defenseRepo;
	@Autowired
	FactionRepo factionRepo;
	@Autowired
	LocationRepo locationRepo;
	@Autowired
	UserRepo userRepo;
	@Autowired
	RangeRepo rangeRepo;
	@Autowired
	BodySlotRepo bodyslotRepo;

	@GetMapping("/echo")
	public String echo(@RequestParam("tagName") String str) {
		return str;
	}

	@GetMapping("/getTag")
	public Tag getTag(@RequestParam("tagId") int tagId) {
		return tagRepo.findById(tagId).get();
	}

	@PostMapping("/newTag")
	public Tag createTag(@RequestBody Tag tag) {
		if (tagRepo.existsById(tag.getId())) {
			return null;
		}
		tagRepo.save(tag);
		return tag;
	}

	@GetMapping("/worlds/{id}")
	public World getWorldById(@PathVariable("id") int id) {
		return worldRepo.findById(id).get();
	}

	@GetMapping("/worlds")
	public Iterable<World> getWorlds() {
		return worldRepo.findAll();
	}

	@GetMapping("/users/{id}")
	public User getUserById(@PathVariable("id") int id) {
		return userRepo.findById(id).get();
	}

	@GetMapping("/users")
	public Iterable<User> getUsers() {
		return userRepo.findAll();
	}

	// get all worlds from a particular user
	@GetMapping("/userWorlds/{id}")
	public Iterable<World> getUserWorlds(@PathVariable("id") int id) {
		Iterable<World> worlds = worldRepo.findAll();
		ArrayList<World> worldsFromUser = new ArrayList<World>();
		for (World w : worlds) {
			if (w.getUser().getId() == id) {
				worldsFromUser.add(w);
			}
		}

		return worldsFromUser;
	}

	@GetMapping("/weapons")
	public Iterable<Weapon> getWeapons() {
		return weaponRepo.findAll();
	}
	
	@GetMapping("/weapons/{id}")
	public Weapon getWeaponById(@PathVariable("id") int id) {
		return weaponRepo.findById(id).get();
	}

	@GetMapping("/defenses")
	public Iterable<Defense> getDefenses() {
		return defenseRepo.findAll();
	}
	
	@GetMapping("/defenses/{id}")
	public Defense getDefenseById(@PathVariable("id") int id) {
		return defenseRepo.findById(id).get();
	}

	@GetMapping("/factions")
	public Iterable<Faction> getFactions() {
		return factionRepo.findAll();
	}
	
	@GetMapping("/ranges")
	public Iterable<Range> getRanges() {
		return rangeRepo.findAll();
	}
	
	@GetMapping("/bodyslots")
	public Iterable<BodySlot> getBodySlots() {
		return bodyslotRepo.findAll();
	}
	
	@GetMapping("/factions/{id}")
	public Faction getFactionById(@PathVariable("id") int id) {
		return factionRepo.findById(id).get();
	}

	@GetMapping("/locations")
	public Iterable<Location> getLocations() {
		return locationRepo.findAll();
	}
	
	@GetMapping("/locations/{id}")
	public Location getLocationsById(@PathVariable("id") int id) {
		return locationRepo.findById(id).get();
	}

	@GetMapping("/worldFactions/{id}")
	public Iterable<Faction> getWorldFactionsById(@PathVariable("id") int id) {
		ArrayList<Faction> factions = new ArrayList<Faction>();
		for (Faction f : factionRepo.findAll()) {
			if (f.getWorld().getId() == id) {
				factions.add(f);
			}
		}
		return factions;
	}

	@GetMapping("/worldLocations/{id}")
	public Iterable<Location> getWorldLocationsById(@PathVariable("id") int id) {
		ArrayList<Location> locations = new ArrayList<Location>();
		for (Location l : locationRepo.findAll()) {
			if (l.getWorld().getId() == id) {
				locations.add(l);
			}
		}
		return locations;
	}

	@GetMapping("user/{username}/{password}")
	public User getUser(@PathVariable("username") String username, @PathVariable("password") String password) {
		for (User u : userRepo.findAll()) {
			if (u.getUsername().equals(username) && u.getPassword().equals(password)) {
				return u;
			}
		}
		return null;
	}

	@PostMapping("/createWorld")
	public World createWorld(@RequestParam String name, @RequestParam String descriptor, @RequestParam int user_id) {
		World world = new World();
		User user = userRepo.findById(user_id).get();
		world.setName(name);
		world.setDescriptor(descriptor);
		world.setUser(user);
		worldRepo.save(world);
		return world;
	}

	@PostMapping("/createLocation")
	public Location createLocation(@RequestParam String name, @RequestParam String descriptor, @RequestParam int world_id) {
		Location location = new Location();
		World world = worldRepo.findById(world_id).get();
		location.setName(name);
		location.setDescriptor(descriptor);
		location.setWorld(world);
		locationRepo.save(location);
		return location;
	}

	@PostMapping("/createFaction")
	public Faction createFaction(@RequestParam String name, @RequestParam String descriptor, @RequestParam int population,
			@RequestParam int world_id) {
		Faction faction = new Faction();
		World world = worldRepo.findById(world_id).get();
		faction.setName(name);
		faction.setDescriptor(descriptor);
		faction.setPopulation(population);
		faction.setWorld(world);
		factionRepo.save(faction);
		return faction;
	}

	@PostMapping("/createWeapon")
	public Weapon createWeapon(@RequestParam String name, @RequestParam String descriptor, @RequestParam int range_id,
			@RequestParam int faction_id) {
		Weapon weapon = new Weapon();
		Faction faction = factionRepo.findById(faction_id).get();
		Range range = rangeRepo.findById(range_id).get();
		weapon.setName(name);
		weapon.setDescriptor(descriptor);
		weapon.setRange(range);
		faction.addWeapon(weapon);
		weaponRepo.save(weapon);
		return weapon;
	}

	@PostMapping("/createDefense")
	public Defense createDefense(@RequestParam String name, @RequestParam String descriptor, @RequestParam int bodyslot_id,
			@RequestParam int faction_id) {
		Defense defense = new Defense();
		Faction faction = factionRepo.findById(faction_id).get();
		BodySlot bodyslot = bodyslotRepo.findById(bodyslot_id).get();
		defense.setName(name);
		defense.setDescriptor(descriptor);
		defense.setSlot(bodyslot);
		faction.addDefense(defense);
		defenseRepo.save(defense);
		return defense;
	}

	@PostMapping("/addTagToWorld")
	public World addTagToWorld(@RequestParam String name, @RequestParam int world_id) {
		World world = worldRepo.findById(world_id).get();
		Tag tag;
		for (Tag t : tagRepo.findAll()) {
			if (t.getName().equals(name)) {
				List<Tag> tags = world.getTags();
				for (Tag wt : tags) {
					if (wt.getName().equals(name)) {
						return null;
					}
				}
				world.addTag(t);
				worldRepo.save(world);
				return null;
			}
		}
		tag = new Tag();
		tag.setName(name);
		world.addTag(tag);
		tagRepo.save(tag);
		return world;
	}

	@PostMapping("/addTagToDefense")
	public Defense addTagToDefense(@RequestParam String name, @RequestParam int defense_id) {
		Defense defense = defenseRepo.findById(defense_id).get();
		Tag tag;
		for (Tag t : tagRepo.findAll()) {
			if (t.getName().equals(name)) {
				List<Tag> tags = defense.getTags();
				for (Tag dt : tags) {
					if (dt.getName().equals(name)) {
						return null;
					}
				}
				defense.addTag(t);
				defenseRepo.save(defense);
				return null;
			}
		}
		tag = new Tag();
		tag.setName(name);
		defense.addTag(tag);
		tagRepo.save(tag);
		return defense;
	}

	@PostMapping("/addTagToFaction")
	public Faction addTagToFaction(@RequestParam String name, @RequestParam int faction_id) {
		Faction faction = factionRepo.findById(faction_id).get();
		Tag tag;
		for (Tag t : tagRepo.findAll()) {
			if (t.getName().equals(name)) {
				List<Tag> tags = faction.getTags();
				for (Tag ft : tags) {
					if (ft.getName().equals(name)) {
						return null;
					}
				}
				faction.addTag(t);
				factionRepo.save(faction);
				return null;
			}
		}
		tag = new Tag();
		tag.setName(name);
		faction.addTag(tag);
		tagRepo.save(tag);
		return faction;
	}

	@PostMapping("/addTagToLocation")
	public Location addTagToLocation(@RequestParam String name, @RequestParam int location_id) {
		Location location = locationRepo.findById(location_id).get();
		Tag tag;
		for (Tag t : tagRepo.findAll()) {
			if (t.getName().equals(name)) {
				List<Tag> tags = location.getTags();
				for (Tag lt : tags) {
					if (lt.getName().equals(name)) {
						return null;
					}
				}
				location.addTag(t);
				locationRepo.save(location);
				return null;
			}
		}
		tag = new Tag();
		tag.setName(name);
		location.addTag(tag);
		tagRepo.save(tag);
		return location;
	}

	@PostMapping("/addTagToWeapon")
	public Weapon addTagToWeapon(@RequestParam String name, @RequestParam int weapon_id) {
		Weapon weapon = weaponRepo.findById(weapon_id).get();
		Tag tag;
		for (Tag t : tagRepo.findAll()) {
			if (t.getName().equals(name)) {
				List<Tag> tags = weapon.getTags();
				for (Tag wt : tags) {
					if (wt.getName().equals(name)) {
						return null;
					}
				}
				weapon.addTag(t);
				weaponRepo.save(weapon);
				return null;
			}
		}
		tag = new Tag();
		tag.setName(name);
		weapon.addTag(tag);
		tagRepo.save(tag);
		return weapon;
	}
}
