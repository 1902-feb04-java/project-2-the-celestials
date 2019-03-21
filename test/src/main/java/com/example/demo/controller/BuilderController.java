package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.example.demo.test.Tag;
import com.example.demo.test.TagRepo;
import com.example.demo.test.Weapon;
import com.example.demo.test.WeaponRepo;
import com.example.demo.test.User;
import com.example.demo.test.UserRepo;
import com.example.demo.test.World;
import com.example.demo.test.WorldRepo;

@RestController
@CrossOrigin
@RequestMapping("/build")
public class BuilderController {
	@Autowired
	TagRepo tr;
	@Autowired
	WorldRepo wr;
	@Autowired
	WeaponRepo weaponrepo;
	@Autowired
	DefenseRepo defenserepo;
	@Autowired
	FactionRepo factionrepo;
	@Autowired
	LocationRepo locationrepo;
	FactionRepo fr;
	@Autowired
	LocationRepo lr;
	@Autowired
	UserRepo ur;

	@GetMapping("/echo")
	public String echo(@RequestParam("tagName") String str){
		return str;
	}
	
	@GetMapping("/getTag")
	public Tag getTag(@RequestParam("tagId") int tagId){
		return tr.findById(tagId).get();
	}
	
	@PostMapping("/newTag")
	public Tag createTag(@RequestBody Tag tag){
		if (tr.existsById(tag.getId())) {
			return null;
		}
		tr.save(tag);
		return tag;
	}
	
	@GetMapping("/worlds/{id}")
	public World getWorldById(@PathVariable("id") int id) {
		return wr.findById(id).get();
	}
	
	@GetMapping("/worlds")
	public Iterable<World> getWorlds() {
		return wr.findAll();
	}
	
	@GetMapping("/weapons")
	public Iterable<Weapon> getWeapons(){
		return weaponrepo.findAll();
	}
	@GetMapping("/defenses")
	public Iterable<Defense> getDefenses(){
		return defenserepo.findAll();
	}

	@GetMapping("/factions")
	public Iterable<Faction> getFactions(){
		return factionrepo.findAll();
	}
	@GetMapping("/locations")
	public Iterable<Location> getLocations(){
		return locationrepo.findAll();
	}
    
	@GetMapping("/worldFactions/{id}")
	public Iterable<Faction> getWorldFactionsById(@PathVariable("id") int id) {
		ArrayList<Faction> factions = new ArrayList<Faction>();
		for(Faction f : fr.findAll()) {
			if(f.getWorld().getId() == id) {
				factions.add(f);
			}
		}
		return factions;
	}
	
	@GetMapping("/worldLocations/{id}")
	public Iterable<Location> getWorldLocationsById(@PathVariable("id") int id) {
		ArrayList<Location> locations = new ArrayList<Location>();
		for(Location l : lr.findAll()) {
			if(l.getWorld().getId() == id) {
				locations.add(l);
			}
		}
		return locations;
	}
	
	@GetMapping("user/{username}/{password}")
	public User getUser(@PathVariable("username") String username, @PathVariable("password") String password) {
		for(User u : ur.findAll()) {
			if(u.getUsername().equals(username) && u.getPassword().equals(password)) {
				return u;
			}
		}
		return null;
	}
}
