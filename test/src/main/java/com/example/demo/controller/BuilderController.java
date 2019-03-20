package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.test.Tag;
import com.example.demo.test.TagRepo;
import com.example.demo.test.Weapon;
import com.example.demo.test.WeaponRepo;
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

}
