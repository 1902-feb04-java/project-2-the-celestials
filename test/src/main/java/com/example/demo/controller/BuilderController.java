package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	WeaponRepo weaponrepo;
	@Autowired
	DefenseRepo defenserepo;
	@Autowired
	FactionRepo factionRepo;
	@Autowired
	LocationRepo locationRepo;
	@Autowired
	UserRepo userRepo;
	@Autowired
	RangeRepo rr;

	@GetMapping("/echo")
	public String echo(@RequestParam("tagName") String str) {
		return str;
	}

	@GetMapping("/getTag")
	public Tag getTag(@RequestParam("tagId") int tagId){
		return tagRepo.findById(tagId).get();
	}

	@PostMapping("/newTag")
	public Tag createTag(@RequestBody Tag tag){
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
		return weaponrepo.findAll();
	}

	@GetMapping("/defenses")
	public Iterable<Defense> getDefenses() {
		return defenserepo.findAll();
	}

	@GetMapping("/factions")
	public Iterable<Faction> getFactions(){
		return factionRepo.findAll();
	}

	@GetMapping("/locations")
	public Iterable<Location> getLocations(){
		return locationRepo.findAll();
	}

	@GetMapping("/worldFactions/{id}")
	public Iterable<Faction> getWorldFactionsById(@PathVariable("id") int id) {
		ArrayList<Faction> factions = new ArrayList<Faction>();
		for(Faction f : factionRepo.findAll()) {
			if(f.getWorld().getId() == id) {
				factions.add(f);
			}
		}
		return factions;
	}

	@GetMapping("/worldLocations/{id}")
	public Iterable<Location> getWorldLocationsById(@PathVariable("id") int id) {
		ArrayList<Location> locations = new ArrayList<Location>();
		for(Location l : locationRepo.findAll()) {
			if(l.getWorld().getId() == id) {
				locations.add(l);
			}
		}
		return locations;
	}

	@GetMapping("user/{username}/{password}")
	public User getUser(@PathVariable("username") String username, @PathVariable("password") String password) {
		for(User u : userRepo.findAll()) {
			if(u.getUsername().equals(username) && u.getPassword().equals(password)) {
				return u;
			}
		}
		return null;
	}

	@PostMapping("/createWorld")
	public void createWorld(@RequestParam String name, @RequestParam String descriptor, @RequestParam int user_id) {
		World world = new World();
		User user = userRepo.findById(user_id).get();
		world.setName(name);
		world.setDescriptor(descriptor);
		world.setUser(user);
		wr.save(world);
	}
	
	@PostMapping("/addTagToWorld")
	public void addTagToWorld(@RequestParam String name, @RequestParam int world_id) {
		World world = worldRepo.findById(world_id).get();
		Tag tag;
		for (Tag t : tagRepo.findAll()) {
			if(t.getName().equals(name)) {
				List<Tag> tags = world.getTags();
				for(Tag wt : tags) {
					if(wt.getName().equals(name)) {
						return;
					}
				}
				world.addTag(t);
				worldRepo.save(world);
				return;
			}
		}
		tag = new Tag();
		tag.setName(name);
		world.addTag(tag);
		tagRepo.save(tag);
	}
	
	@PostMapping("/addTagToDefense")
	public void addTagToDefense(@RequestParam String name, @RequestParam int defense_id) {
		Defense defense = defenserepo.findById(defense_id).get();
		Tag tag;
		for(Tag t : tagRepo.findAll()) {
			if(t.getName().equals(name)) {
				List<Tag> tags = defense.getTags();
				for(Tag dt : tags) {
					if(dt.getName().equals(name)) {
						return;
					}
				}
				defense.addTag(t);
				defenserepo.save(defense);
				return;
			}
		}
		tag = new Tag();
		tag.setName(name);
		defense.addTag(tag);
		tagRepo.save(tag);
	}
	
	@PostMapping("/addTagToFaction")
	public void addTagToFaction(@RequestParam String name, @RequestParam int faction_id) {
		Faction faction = factionRepo.findById(faction_id).get();
		Tag tag;
		for(Tag t : tr.findAll()) {
			if(t.getName().equals(name)) {
				List<Tag> tags = faction.getTags();
				for(Tag ft : tags) {
					if(ft.getName().equals(name)) {
						return;
					}
				}
				faction.addTag(t);
				factionRepo.save(faction);
				return;
			}
		}
		tag = new Tag();
		tag.setName(name);
		faction.addTag(tag);
		tagRepo.save(tag);
	}
	
	@PostMapping("/addTagToLocation")
	public void addTagToLocation(@RequestParam String name, @RequestParam int location_id) {
		Location location = locationRepo.findById(location_id).get();
		Tag tag;
		for(Tag t : tagRepo.findAll()) {
			if(t.getName().equals(name)) {
				List<Tag> tags = location.getTags();
				for(Tag lt : tags) {
					if(lt.getName().equals(name)) {
						return;
					}
				}
				location.addTag(t);
				locationRepo.save(location);
				return;
			}
		}
		tag = new Tag();
		tag.setName(name);
		location.addTag(tag);
		tagRepo.save(tag);
	}

	@PostMapping("/createLocation")
	public void createLocation(@RequestParam String name, @RequestParam String descriptor, @RequestParam int world_id) {
		Location location = new Location();
		World world = worldRepo.findById(world_id).get();
		location.setName(name);
		location.setDescriptor(descriptor);
		location.setWorld(world);
		locationRepo.save(location);
	}

	@PostMapping("/createFaction")
	public void createFaction(@RequestParam String name, @RequestParam String descriptor, @RequestParam int population,
			@RequestParam int world_id) {
		Faction faction = new Faction();
		World world = worldRepo.findById(world_id).get();
		faction.setName(name);
		faction.setDescriptor(descriptor);
		faction.setPopulation(population);
		faction.setWorld(world);
		factionRepo.save(faction);
	}

	@PostMapping("/createWeapon")
	public void createWeapon(@RequestParam String name, @RequestParam String descriptor, @RequestParam int range_id,
			@RequestParam int faction_id) {
		Weapon weapon = new Weapon();
		Faction faction = factionRepo.findById(faction_id).get();
		Range range = rr.findById(range_id).get();
		weapon.setName(name);
		weapon.setDescriptor(descriptor);
		weapon.setRange(range);
		faction.addWeapon(weapon);
		weaponrepo.save(weapon);
	}
}
